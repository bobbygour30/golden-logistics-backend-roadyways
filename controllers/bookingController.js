import BookingOffice from '../models/BookingOffice.js';

// @desc    Get all booking offices
// @route   GET /api/booking
// @access  Private
export const getAllOffices = async (req, res) => {
  try {
    const { region, search } = req.query;
    let query = {};

    // Filter by region
    if (region && region !== 'all') {
      query.region = region;
    }

    // Search functionality
    if (search) {
      query.$or = [
        { location: { $regex: search, $options: 'i' } },
        { name: { $regex: search, $options: 'i' } },
        { contacts: { $regex: search, $options: 'i' } },
        { address: { $regex: search, $options: 'i' } }
      ];
    }

    const offices = await BookingOffice.find(query).sort({ region: 1, location: 1 });
    
    res.status(200).json({
      success: true,
      count: offices.length,
      data: offices
    });
  } catch (error) {
    console.error('Get all offices error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch offices',
      error: error.message
    });
  }
};

// @desc    Get single booking office
// @route   GET /api/booking/:id
// @access  Private
export const getOfficeById = async (req, res) => {
  try {
    const office = await BookingOffice.findById(req.params.id);
    
    if (!office) {
      return res.status(404).json({
        success: false,
        message: 'Office not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: office
    });
  } catch (error) {
    console.error('Get office by id error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch office',
      error: error.message
    });
  }
};

// @desc    Create new booking office
// @route   POST /api/booking
// @access  Private
export const createOffice = async (req, res) => {
  try {
    const { location, name, address, contacts, region } = req.body;

    // Validation
    if (!location || !address || !contacts) {
      return res.status(400).json({
        success: false,
        message: 'Please provide location, address and contacts'
      });
    }

    const office = await BookingOffice.create({
      location,
      name: name || '',
      address,
      contacts,
      region: region || 'Delhi'
    });

    res.status(201).json({
      success: true,
      message: 'Booking office created successfully',
      data: office
    });
  } catch (error) {
    console.error('Create office error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create office',
      error: error.message
    });
  }
};

// @desc    Update booking office
// @route   PUT /api/booking/:id
// @access  Private
export const updateOffice = async (req, res) => {
  try {
    const { location, name, address, contacts, region } = req.body;
    
    const office = await BookingOffice.findById(req.params.id);
    
    if (!office) {
      return res.status(404).json({
        success: false,
        message: 'Office not found'
      });
    }

    // Update fields
    office.location = location || office.location;
    office.name = name !== undefined ? name : office.name;
    office.address = address || office.address;
    office.contacts = contacts || office.contacts;
    office.region = region || office.region;

    const updatedOffice = await office.save();

    res.status(200).json({
      success: true,
      message: 'Booking office updated successfully',
      data: updatedOffice
    });
  } catch (error) {
    console.error('Update office error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update office',
      error: error.message
    });
  }
};

// @desc    Delete booking office
// @route   DELETE /api/booking/:id
// @access  Private
export const deleteOffice = async (req, res) => {
  try {
    const office = await BookingOffice.findById(req.params.id);
    
    if (!office) {
      return res.status(404).json({
        success: false,
        message: 'Office not found'
      });
    }

    await office.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Booking office deleted successfully'
    });
  } catch (error) {
    console.error('Delete office error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete office',
      error: error.message
    });
  }
};

// @desc    Get offices by region
// @route   GET /api/booking/region/:region
// @access  Private
export const getOfficesByRegion = async (req, res) => {
  try {
    const { region } = req.params;
    const offices = await BookingOffice.find({ region });
    
    res.status(200).json({
      success: true,
      count: offices.length,
      data: offices
    });
  } catch (error) {
    console.error('Get offices by region error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch offices',
      error: error.message
    });
  }
};

// @desc    Get statistics
// @route   GET /api/booking/stats
// @access  Private
export const getStats = async (req, res) => {
  try {
    const totalOffices = await BookingOffice.countDocuments();
    const regionStats = await BookingOffice.aggregate([
      {
        $group: {
          _id: '$region',
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: {
        total: totalOffices,
        byRegion: regionStats
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch statistics',
      error: error.message
    });
  }
};