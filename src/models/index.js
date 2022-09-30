// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HomeEvent, Contractor, DecorationOrder, Homeowner, Decoration, DecorationOrderContractor, DollarAmount, Address } = initSchema(schema);

export {
  HomeEvent,
  Contractor,
  DecorationOrder,
  Homeowner,
  Decoration,
  DecorationOrderContractor,
  DollarAmount,
  Address
};