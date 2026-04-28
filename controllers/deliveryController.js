import DeliveryOffice from '../models/DeliveryOffice.js';

// Get all delivery offices
export const getAllOffices = async (req, res) => {
  try {
    const { region, search } = req.query;
    let query = {};

    if (region && region !== 'all') {
      query.region = region;
    }

    if (search) {
      query.$or = [
        { location: { $regex: search, $options: 'i' } },
        { name: { $regex: search, $options: 'i' } },
        { contacts: { $regex: search, $options: 'i' } },
        { pincode: { $regex: search, $options: 'i' } }
      ];
    }

    const offices = await DeliveryOffice.find(query).sort({ region: 1, location: 1 });
    
    res.status(200).json({
      success: true,
      count: offices.length,
      data: offices
    });
  } catch (error) {
    console.error('Get all delivery offices error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch delivery offices'
    });
  }
};

// Get single delivery office
export const getOfficeById = async (req, res) => {
  try {
    const office = await DeliveryOffice.findById(req.params.id);
    if (!office) {
      return res.status(404).json({ success: false, message: 'Office not found' });
    }
    res.status(200).json({ success: true, data: office });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch office' });
  }
};

// Create delivery office
export const createOffice = async (req, res) => {
  try {
    const { location, name, address, contacts, region, pincode, landmark, alternatePhone } = req.body;

    if (!location || !address || !contacts) {
      return res.status(400).json({
        success: false,
        message: 'Please provide location, address and contacts'
      });
    }

    const office = await DeliveryOffice.create({
      location,
      name: name || '',
      address,
      contacts,
      region: region || 'Uttar Pradesh',
      pincode: pincode || '',
      landmark: landmark || '',
      alternatePhone: alternatePhone || ''
    });

    res.status(201).json({
      success: true,
      message: 'Delivery office created successfully',
      data: office
    });
  } catch (error) {
    console.error('Create delivery office error:', error);
    res.status(500).json({ success: false, message: 'Failed to create office' });
  }
};

// Update delivery office
export const updateOffice = async (req, res) => {
  try {
    const office = await DeliveryOffice.findById(req.params.id);
    if (!office) {
      return res.status(404).json({ success: false, message: 'Office not found' });
    }

    const updatedOffice = await DeliveryOffice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Delivery office updated successfully',
      data: updatedOffice
    });
  } catch (error) {
    console.error('Update delivery office error:', error);
    res.status(500).json({ success: false, message: 'Failed to update office' });
  }
};

// Delete delivery office
export const deleteOffice = async (req, res) => {
  try {
    const office = await DeliveryOffice.findById(req.params.id);
    if (!office) {
      return res.status(404).json({ success: false, message: 'Office not found' });
    }

    await office.deleteOne();
    res.status(200).json({ success: true, message: 'Delivery office deleted successfully' });
  } catch (error) {
    console.error('Delete delivery office error:', error);
    res.status(500).json({ success: false, message: 'Failed to delete office' });
  }
};