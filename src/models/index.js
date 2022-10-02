// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AvailableInstallations, HomeEvent, Contractor, DecorationOrder, Homeowner, Decoration, DecorationOrderContractor, DollarAmount, Address } = initSchema(schema);

export {
  AvailableInstallations,
  HomeEvent,
  Contractor,
  DecorationOrder,
  Homeowner,
  Decoration,
  DecorationOrderContractor,
  DollarAmount,
  Address
};