// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HomeEvent, Contractor, Homeowner, DecorationOrder, Decoration, DollarAmount, Address } = initSchema(schema);

export {
  HomeEvent,
  Contractor,
  Homeowner,
  DecorationOrder,
  Decoration,
  DollarAmount,
  Address
};