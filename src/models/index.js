// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BetaOrder, AvailableInstallations, HomeEvent, Contractor, Homeowner, DecorationOrder, Decoration, DecorationOrderContractor, DollarAmount, Address } = initSchema(schema);

export {
  BetaOrder,
  AvailableInstallations,
  HomeEvent,
  Contractor,
  Homeowner,
  DecorationOrder,
  Decoration,
  DecorationOrderContractor,
  DollarAmount,
  Address
};