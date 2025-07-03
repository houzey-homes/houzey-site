import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type EagerDollarAmount = {
  readonly Dollars?: number | null;
  readonly Cents?: number | null;
}

type LazyDollarAmount = {
  readonly Dollars?: number | null;
  readonly Cents?: number | null;
}

export declare type DollarAmount = LazyLoading extends LazyLoadingDisabled ? EagerDollarAmount : LazyDollarAmount

export declare const DollarAmount: (new (init: ModelInit<DollarAmount>) => DollarAmount)

type EagerAddress = {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly ZipCode?: string | null;
}

type LazyAddress = {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly ZipCode?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

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

type HomeownerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DecorationOrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DecorationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DecorationOrderContractorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerBetaOrder = {
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
}

type LazyBetaOrder = {
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
}

export declare type BetaOrder = LazyLoading extends LazyLoadingDisabled ? EagerBetaOrder : LazyBetaOrder

export declare const BetaOrder: (new (init: ModelInit<BetaOrder, BetaOrderMetaData>) => BetaOrder) & {
  copyOf(source: BetaOrder, mutator: (draft: MutableModel<BetaOrder, BetaOrderMetaData>) => MutableModel<BetaOrder, BetaOrderMetaData> | void): BetaOrder;
}

type EagerAvailableInstallations = {
  readonly id: string;
  readonly assignedContractor1?: string | null;
  readonly assignedContractor2?: string | null;
  readonly startDateTime: string;
  readonly isAvailable?: boolean | null;
  readonly contractor1Phone?: string | null;
  readonly contractor2Phone?: string | null;
  readonly day?: string | null;
  readonly time?: string | null;
  readonly monthAsWord?: string | null;
  readonly dayOfWeek?: string | null;
  readonly dayAsNumber?: string | null;
  readonly yearAsNumber?: string | null;
  readonly timeAsString?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAvailableInstallations = {
  readonly id: string;
  readonly assignedContractor1?: string | null;
  readonly assignedContractor2?: string | null;
  readonly startDateTime: string;
  readonly isAvailable?: boolean | null;
  readonly contractor1Phone?: string | null;
  readonly contractor2Phone?: string | null;
  readonly day?: string | null;
  readonly time?: string | null;
  readonly monthAsWord?: string | null;
  readonly dayOfWeek?: string | null;
  readonly dayAsNumber?: string | null;
  readonly yearAsNumber?: string | null;
  readonly timeAsString?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AvailableInstallations = LazyLoading extends LazyLoadingDisabled ? EagerAvailableInstallations : LazyAvailableInstallations

export declare const AvailableInstallations: (new (init: ModelInit<AvailableInstallations, AvailableInstallationsMetaData>) => AvailableInstallations) & {
  copyOf(source: AvailableInstallations, mutator: (draft: MutableModel<AvailableInstallations, AvailableInstallationsMetaData>) => MutableModel<AvailableInstallations, AvailableInstallationsMetaData> | void): AvailableInstallations;
}

type EagerHomeEvent = {
  readonly id: string;
  readonly isInstall?: boolean | null;
  readonly isTakedown?: boolean | null;
  readonly isMaintenance?: boolean | null;
  readonly address?: Address | null;
  readonly eventDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHomeEvent = {
  readonly id: string;
  readonly isInstall?: boolean | null;
  readonly isTakedown?: boolean | null;
  readonly isMaintenance?: boolean | null;
  readonly address?: Address | null;
  readonly eventDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HomeEvent = LazyLoading extends LazyLoadingDisabled ? EagerHomeEvent : LazyHomeEvent

export declare const HomeEvent: (new (init: ModelInit<HomeEvent, HomeEventMetaData>) => HomeEvent) & {
  copyOf(source: HomeEvent, mutator: (draft: MutableModel<HomeEvent, HomeEventMetaData>) => MutableModel<HomeEvent, HomeEventMetaData> | void): HomeEvent;
}

type EagerContractor = {
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
}

type LazyContractor = {
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly address?: Address | null;
  readonly startdate?: string | null;
  readonly rating?: number | null;
  readonly decorationorders: AsyncCollection<DecorationOrderContractor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Contractor = LazyLoading extends LazyLoadingDisabled ? EagerContractor : LazyContractor

export declare const Contractor: (new (init: ModelInit<Contractor, ContractorMetaData>) => Contractor) & {
  copyOf(source: Contractor, mutator: (draft: MutableModel<Contractor, ContractorMetaData>) => MutableModel<Contractor, ContractorMetaData> | void): Contractor;
}

type EagerHomeowner = {
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
}

type LazyHomeowner = {
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly address?: Address | null;
  readonly rating?: number | null;
  readonly HomeownerToDecorationOrders: AsyncCollection<DecorationOrder>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Homeowner = LazyLoading extends LazyLoadingDisabled ? EagerHomeowner : LazyHomeowner

export declare const Homeowner: (new (init: ModelInit<Homeowner, HomeownerMetaData>) => Homeowner) & {
  copyOf(source: Homeowner, mutator: (draft: MutableModel<Homeowner, HomeownerMetaData>) => MutableModel<Homeowner, HomeownerMetaData> | void): Homeowner;
}

type EagerDecorationOrder = {
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
}

type LazyDecorationOrder = {
  readonly id: string;
  readonly total?: DollarAmount | null;
  readonly decorationList?: (string | null)[] | null;
  readonly address?: string | null;
  readonly installEvent?: string | null;
  readonly takedownEvent?: string | null;
  readonly homeownerID: string;
  readonly Contractors: AsyncCollection<DecorationOrderContractor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DecorationOrder = LazyLoading extends LazyLoadingDisabled ? EagerDecorationOrder : LazyDecorationOrder

export declare const DecorationOrder: (new (init: ModelInit<DecorationOrder, DecorationOrderMetaData>) => DecorationOrder) & {
  copyOf(source: DecorationOrder, mutator: (draft: MutableModel<DecorationOrder, DecorationOrderMetaData>) => MutableModel<DecorationOrder, DecorationOrderMetaData> | void): DecorationOrder;
}

type EagerDecoration = {
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
}

type LazyDecoration = {
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
}

export declare type Decoration = LazyLoading extends LazyLoadingDisabled ? EagerDecoration : LazyDecoration

export declare const Decoration: (new (init: ModelInit<Decoration, DecorationMetaData>) => Decoration) & {
  copyOf(source: Decoration, mutator: (draft: MutableModel<Decoration, DecorationMetaData>) => MutableModel<Decoration, DecorationMetaData> | void): Decoration;
}

type EagerDecorationOrderContractor = {
  readonly id: string;
  readonly contractor: Contractor;
  readonly decorationOrder: DecorationOrder;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDecorationOrderContractor = {
  readonly id: string;
  readonly contractor: AsyncItem<Contractor>;
  readonly decorationOrder: AsyncItem<DecorationOrder>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DecorationOrderContractor = LazyLoading extends LazyLoadingDisabled ? EagerDecorationOrderContractor : LazyDecorationOrderContractor

export declare const DecorationOrderContractor: (new (init: ModelInit<DecorationOrderContractor, DecorationOrderContractorMetaData>) => DecorationOrderContractor) & {
  copyOf(source: DecorationOrderContractor, mutator: (draft: MutableModel<DecorationOrderContractor, DecorationOrderContractorMetaData>) => MutableModel<DecorationOrderContractor, DecorationOrderContractorMetaData> | void): DecorationOrderContractor;
}