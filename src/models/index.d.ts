import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export declare class DollarAmount {
  readonly Dollars?: number | null;
  readonly Cents?: number | null;
  constructor(init: ModelInit<DollarAmount>);
}

export declare class Address {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly ZipCode?: string | null;
  constructor(init: ModelInit<Address>);
}

type BetaOrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AvailableInstallationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeEventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContractorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DecorationOrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeownerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DecorationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DecorationOrderContractorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BetaOrder {
  readonly id: string;
  readonly cartItems?: (string | null)[] | null;
  readonly totalPrice?: string | null;
  readonly chosenInstallation?: string | null;
  readonly homeStreet?: string | null;
  readonly homeCity?: string | null;
  readonly homeState?: string | null;
  readonly homeZip?: string | null;
  readonly homeownerFirstName?: string | null;
  readonly homeownerLastName?: string | null;
  readonly homeownerPhone?: string | null;
  readonly homeownerEmail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BetaOrder, BetaOrderMetaData>);
  static copyOf(source: BetaOrder, mutator: (draft: MutableModel<BetaOrder, BetaOrderMetaData>) => MutableModel<BetaOrder, BetaOrderMetaData> | void): BetaOrder;
}

export declare class AvailableInstallations {
  readonly id: string;
  readonly assignedContractor1?: string | null;
  readonly assignedContractor2?: string | null;
  readonly startDateTime: string;
  readonly isAvailable?: boolean | null;
  readonly contractor1Phone?: string | null;
  readonly contractor2Phone?: string | null;
  readonly day?: string | null;
  readonly time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AvailableInstallations, AvailableInstallationsMetaData>);
  static copyOf(source: AvailableInstallations, mutator: (draft: MutableModel<AvailableInstallations, AvailableInstallationsMetaData>) => MutableModel<AvailableInstallations, AvailableInstallationsMetaData> | void): AvailableInstallations;
}

export declare class HomeEvent {
  readonly id: string;
  readonly isInstall?: boolean | null;
  readonly isTakedown?: boolean | null;
  readonly isMaintenance?: boolean | null;
  readonly address?: Address | null;
  readonly eventDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<HomeEvent, HomeEventMetaData>);
  static copyOf(source: HomeEvent, mutator: (draft: MutableModel<HomeEvent, HomeEventMetaData>) => MutableModel<HomeEvent, HomeEventMetaData> | void): HomeEvent;
}

export declare class Contractor {
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly address?: Address | null;
  readonly startdate?: string | null;
  readonly rating?: number | null;
  readonly decorationorders?: (DecorationOrderContractor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Contractor, ContractorMetaData>);
  static copyOf(source: Contractor, mutator: (draft: MutableModel<Contractor, ContractorMetaData>) => MutableModel<Contractor, ContractorMetaData> | void): Contractor;
}

export declare class DecorationOrder {
  readonly id: string;
  readonly total?: DollarAmount | null;
  readonly decorationList?: (string | null)[] | null;
  readonly address?: string | null;
  readonly installEvent?: string | null;
  readonly takedownEvent?: string | null;
  readonly homeownerID: string;
  readonly Contractors?: (DecorationOrderContractor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DecorationOrder, DecorationOrderMetaData>);
  static copyOf(source: DecorationOrder, mutator: (draft: MutableModel<DecorationOrder, DecorationOrderMetaData>) => MutableModel<DecorationOrder, DecorationOrderMetaData> | void): DecorationOrder;
}

export declare class Homeowner {
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly address?: Address | null;
  readonly rating?: number | null;
  readonly HomeownerToDecorationOrders?: (DecorationOrder | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Homeowner, HomeownerMetaData>);
  static copyOf(source: Homeowner, mutator: (draft: MutableModel<Homeowner, HomeownerMetaData>) => MutableModel<Homeowner, HomeownerMetaData> | void): Homeowner;
}

export declare class Decoration {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly season?: string | null;
  readonly holiday?: string | null;
  readonly isRentable?: boolean | null;
  readonly isAvailable?: boolean | null;
  readonly price?: string | null;
  readonly imglink?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Decoration, DecorationMetaData>);
  static copyOf(source: Decoration, mutator: (draft: MutableModel<Decoration, DecorationMetaData>) => MutableModel<Decoration, DecorationMetaData> | void): Decoration;
}

export declare class DecorationOrderContractor {
  readonly id: string;
  readonly contractor: Contractor;
  readonly decorationOrder: DecorationOrder;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DecorationOrderContractor, DecorationOrderContractorMetaData>);
  static copyOf(source: DecorationOrderContractor, mutator: (draft: MutableModel<DecorationOrderContractor, DecorationOrderContractorMetaData>) => MutableModel<DecorationOrderContractor, DecorationOrderContractorMetaData> | void): DecorationOrderContractor;
}