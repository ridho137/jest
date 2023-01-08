const UserController = require('../controllers/userController');
const PhotoController = require('../controllers/photoController');

const mockRequest = (sessionData, body, params, query) => ({
  body,
  params,
  query,
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Assignment 3 - GetAllPhotos', () => {
  it('USER LOGIN', async () => {
    const req = mockRequest({}, {
      email: 'ridho@gmail.com',
      password: 'Sahabat137!',
    });
    const res = mockResponse();
    await UserController.login(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('GET ALL PHOTO', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await PhotoController.getAllPhotos(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('GET ALL PHOTO FAILED', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await PhotoController.getAllPhotos(req, res);
    res.status = 401
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('GET ONE PHOTO', async () => {
    const req = mockRequest({},{}, {
      id: 2
    });
    const res = mockResponse();
    await PhotoController.getOnePhotoByID(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('GET ONE PHOTO FAILED', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await PhotoController.getOnePhotoByID(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('CREATE PHOTO', async () => {
    const req = mockRequest({}, {
      title: "test",
      caption: "Ridho",
      image_url: "Ridho"
    });
    const res = mockResponse();
    await PhotoController.createPhoto(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('CREATE PHOTO FAILED', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await PhotoController.createPhoto(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
  
});
