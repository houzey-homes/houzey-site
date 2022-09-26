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

type HomeEventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContractorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeownerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DecorationOrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DecorationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Contractor, ContractorMetaData>);
  static copyOf(source: Contractor, mutator: (draft: MutableModel<Contractor, ContractorMetaData>) => MutableModel<Contractor, ContractorMetaData> | void): Contractor;
}

export declare class Homeowner {
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly address?: Address | null;
  readonly rating?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Homeowner, HomeownerMetaData>);
  static copyOf(source: Homeowner, mutator: (draft: MutableModel<Homeowner, HomeownerMetaData>) => MutableModel<Homeowner, HomeownerMetaData> | void): Homeowner;
}

export declare class DecorationOrder {
  readonly id: string;
  readonly total?: DollarAmount | null;
  readonly decorations?: string | null;
  readonly address?: string | null;
  readonly installEvent?: string | null;
  readonly takedownEvent?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DecorationOrder, DecorationOrderMetaData>);
  static copyOf(source: DecorationOrder, mutator: (draft: MutableModel<DecorationOrder, DecorationOrderMetaData>) => MutableModel<DecorationOrder, DecorationOrderMetaData> | void): DecorationOrder;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Decoration, DecorationMetaData>);
  static copyOf(source: Decoration, mutator: (draft: MutableModel<Decoration, DecorationMetaData>) => MutableModel<Decoration, DecorationMetaData> | void): Decoration;
}