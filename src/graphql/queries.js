/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHomeEvent = /* GraphQL */ `
  query GetHomeEvent($id: ID!) {
    getHomeEvent(id: $id) {
      id
      isInstall
      isTakedown
      isMaintenance
      address {
        Street
        City
        State
        ZipCode
      }
      eventDateTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listHomeEvents = /* GraphQL */ `
  query ListHomeEvents(
    $filter: ModelHomeEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomeEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isInstall
        isTakedown
        isMaintenance
        eventDateTime
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHomeEvents = /* GraphQL */ `
  query SyncHomeEvents(
    $filter: ModelHomeEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHomeEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        isInstall
        isTakedown
        isMaintenance
        eventDateTime
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getContractor = /* GraphQL */ `
  query GetContractor($id: ID!) {
    getContractor(id: $id) {
      id
      firstname
      lastname
      phone
      email
      address {
        Street
        City
        State
        ZipCode
      }
      startdate
      rating
      decorationorders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listContractors = /* GraphQL */ `
  query ListContractors(
    $filter: ModelContractorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContractors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        phone
        email
        startdate
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncContractors = /* GraphQL */ `
  query SyncContractors(
    $filter: ModelContractorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContractors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstname
        lastname
        phone
        email
        startdate
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getHomeowner = /* GraphQL */ `
  query GetHomeowner($id: ID!) {
    getHomeowner(id: $id) {
      id
      firstname
      lastname
      phone
      email
      address {
        Street
        City
        State
        ZipCode
      }
      rating
      HomeownerToDecorationOrders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listHomeowners = /* GraphQL */ `
  query ListHomeowners(
    $filter: ModelHomeownerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomeowners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        phone
        email
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHomeowners = /* GraphQL */ `
  query SyncHomeowners(
    $filter: ModelHomeownerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHomeowners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstname
        lastname
        phone
        email
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDecorationOrder = /* GraphQL */ `
  query GetDecorationOrder($id: ID!) {
    getDecorationOrder(id: $id) {
      id
      total {
        Dollars
        Cents
      }
      decorationList
      address
      installEvent
      takedownEvent
      homeownerID
      Contractors {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listDecorationOrders = /* GraphQL */ `
  query ListDecorationOrders(
    $filter: ModelDecorationOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDecorationOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        decorationList
        address
        installEvent
        takedownEvent
        homeownerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDecorationOrders = /* GraphQL */ `
  query SyncDecorationOrders(
    $filter: ModelDecorationOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDecorationOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        decorationList
        address
        installEvent
        takedownEvent
        homeownerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getDecoration = /* GraphQL */ `
  query GetDecoration($id: ID!) {
    getDecoration(id: $id) {
      id
      name
      description
      season
      holiday
      isRentable
      isAvailable
      price
      imglink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDecorations = /* GraphQL */ `
  query ListDecorations(
    $filter: ModelDecorationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDecorations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        season
        holiday
        isRentable
        isAvailable
        price
        imglink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDecorations = /* GraphQL */ `
  query SyncDecorations(
    $filter: ModelDecorationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDecorations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        season
        holiday
        isRentable
        isAvailable
        price
        imglink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDecorationOrderContractor = /* GraphQL */ `
  query GetDecorationOrderContractor($id: ID!) {
    getDecorationOrderContractor(id: $id) {
      id
      contractorID
      decorationOrderID
      contractor {
        id
        firstname
        lastname
        phone
        email
        startdate
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      decorationOrder {
        id
        decorationList
        address
        installEvent
        takedownEvent
        homeownerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listDecorationOrderContractors = /* GraphQL */ `
  query ListDecorationOrderContractors(
    $filter: ModelDecorationOrderContractorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDecorationOrderContractors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contractorID
        decorationOrderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDecorationOrderContractors = /* GraphQL */ `
  query SyncDecorationOrderContractors(
    $filter: ModelDecorationOrderContractorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDecorationOrderContractors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        contractorID
        decorationOrderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
