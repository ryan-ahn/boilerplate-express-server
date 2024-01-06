import { Request, Response } from 'express';
import response from '../utils/handler/response';
import { sampleServices } from '../services';
import { status } from '../constants/response';

const sampleController = async (req: Request, res: Response): Promise<void> => {
  try {
    const serviceRes = await sampleServices.sampleService();
    res.status(status.OK).json(response.success(status.OK, serviceRes.message));
  } catch (error) {
    res
      .status(status.BAD_REQUEST)
      .json(response.fail(status.BAD_REQUEST, error.message));
  }
};

export default {
  sampleController,
};
