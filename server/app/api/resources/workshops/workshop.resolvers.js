import { Workshop } from "./workshop.model";
import { User } from "../users/user.model";
import { controller } from "../../modules/query";

const getAllWorkshops = async (root, { input }) => {
  return controller.getAll(Workshop);
};

const getWorkshop = async (root, { id }) => {
  const workshop = await controller.findByParam(Workshop, id);

  if (!workshop) {
    throw new Error(`Could not find workshop by id ${id}`);
  }

  return workshop;
};

const createNewWorkshop = async (root, { input }, context) => {
  const { by, ...workshop } = input;
  workshop["by"] = by.id;

  return controller.createOne(Workshop, workshop);
};

const updateWorkshop = async (root, { input }, context) => {
  const { id, ...workshop } = input;

  const selected = await controller.findByParam(Workshop, id);

  if (selected) {
    return controller.updateOne(selected, workshop);
  }

  throw new Error(`Could not find workshop by id ${id}`);
};

const deleteWorkshop = async (root, { id }, context) => {
  const selected = await controller.findByParam(Workshop, id);

  if (selected) {
    return controller.deleteOne(selected);
  }

  throw new Error(`Could not find workshop by id ${id}`);
};

const populateUser = async workshop => {
  const populated = await workshop.populate("by").execPopulate();
  return populated.by;
};

export const workshopResolvers = {
  Query: {
    getAllWorkshops,
    getWorkshop
  },

  Mutation: {
    createNewWorkshop,
    updateWorkshop,
    deleteWorkshop
  },

  Workshop: {
    by: populateUser
  }
};
