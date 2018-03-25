import Controller from './user.controller';
import { User } from './user.model';
import { controller } from '../../modules/query';

const getUser = async (_, { id }) => {  
  const user = await controller.findByParam(User, id);

  if(!user) {
    throw new Error(`Could not find user for id ${id}`);
  } 

  return user;
};

const getAll = () => {
  return controller.getAll(User);
}

const createNew = (root, { input }) => {
  return controller.createOne(User, input);
};

const updateUser = async (root, { input }) => {
  const { id, ...update} = input;

  let selected = await controller.findByParam(User, id);

  if(selected) {
    return controller.updateOne(selected, update);
  }

  throw new Error(`Could not find user for id ${id}`);
}

export const userResolvers = {
  Query: {
    getUser,
    getAll
  },

  Mutation: {
    createNew,
    updateUser
  }
};
