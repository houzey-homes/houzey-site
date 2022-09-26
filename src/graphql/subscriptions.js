/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHomeEvent = /* GraphQL */ `
  subscription OnCreateHomeEvent($owner: String) {
    onCreateHomeEvent(owner: $owner) {
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
export const onUpdateHomeEvent = /* GraphQL */ `
  subscription OnUpdateHomeEvent($owner: String) {
    onUpdateHomeEvent(owner: $owner) {
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
export const onDeleteHomeEvent = /* GraphQL */ `
  subscription OnDeleteHomeEvent($owner: String) {
    onDeleteHomeEvent(owner: $owner) {
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
export const onCreateContractor = /* GraphQL */ `
  subscription OnCreateContractor {
    onCreateContractor {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateContractor = /* GraphQL */ `
  subscription OnUpdateContractor {
    onUpdateContractor {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteContractor = /* GraphQL */ `
  subscription OnDeleteContractor {
    onDeleteContractor {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateHomeowner = /* GraphQL */ `
  subscription OnCreateHomeowner {
    onCreateHomeowner {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateHomeowner = /* GraphQL */ `
  subscription OnUpdateHomeowner {
    onUpdateHomeowner {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteHomeowner = /* GraphQL */ `
  subscription OnDeleteHomeowner {
    onDeleteHomeowner {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDecorationOrder = /* GraphQL */ `
  subscription OnCreateDecorationOrder($owner: String) {
    onCreateDecorationOrder(owner: $owner) {
      id
      total {
        Dollars
        Cents
      }
      decorations
      address
      installEvent
      takedownEvent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateDecorationOrder = /* GraphQL */ `
  subscription OnUpdateDecorationOrder($owner: String) {
    onUpdateDecorationOrder(owner: $owner) {
      id
      total {
        Dollars
        Cents
      }
      decorations
      address
      installEvent
      takedownEvent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteDecorationOrder = /* GraphQL */ `
  subscription OnDeleteDecorationOrder($owner: String) {
    onDeleteDecorationOrder(owner: $owner) {
      id
      total {
        Dollars
        Cents
      }
      decorations
      address
      installEvent
      takedownEvent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateDecoration = /* GraphQL */ `
  subscription OnCreateDecoration {
    onCreateDecoration {
      id
      name
      description
      season
      holiday
      isRentable
      isAvailable
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDecoration = /* GraphQL */ `
  subscription OnUpdateDecoration {
    onUpdateDecoration {
      id
      name
      description
      season
      holiday
      isRentable
      isAvailable
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDecoration = /* GraphQL */ `
  subscription OnDeleteDecoration {
    onDeleteDecoration {
      id
      name
      description
      season
      holiday
      isRentable
      isAvailable
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
