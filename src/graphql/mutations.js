/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBetaOrder = /* GraphQL */ `
  mutation CreateBetaOrder(
    $input: CreateBetaOrderInput!
    $condition: ModelBetaOrderConditionInput
  ) {
    createBetaOrder(input: $input, condition: $condition) {
      id
      cartItems
      totalPrice
      chosenInstallation
      homeStreet
      homeCity
      homeState
      homeZip
      homeownerFirstName
      homeownerLastName
      homeownerPhone
      homeownerEmail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBetaOrder = /* GraphQL */ `
  mutation UpdateBetaOrder(
    $input: UpdateBetaOrderInput!
    $condition: ModelBetaOrderConditionInput
  ) {
    updateBetaOrder(input: $input, condition: $condition) {
      id
      cartItems
      totalPrice
      chosenInstallation
      homeStreet
      homeCity
      homeState
      homeZip
      homeownerFirstName
      homeownerLastName
      homeownerPhone
      homeownerEmail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBetaOrder = /* GraphQL */ `
  mutation DeleteBetaOrder(
    $input: DeleteBetaOrderInput!
    $condition: ModelBetaOrderConditionInput
  ) {
    deleteBetaOrder(input: $input, condition: $condition) {
      id
      cartItems
      totalPrice
      chosenInstallation
      homeStreet
      homeCity
      homeState
      homeZip
      homeownerFirstName
      homeownerLastName
      homeownerPhone
      homeownerEmail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAvailableInstallations = /* GraphQL */ `
  mutation CreateAvailableInstallations(
    $input: CreateAvailableInstallationsInput!
    $condition: ModelAvailableInstallationsConditionInput
  ) {
    createAvailableInstallations(input: $input, condition: $condition) {
      id
      assignedContractor1
      assignedContractor2
      startDateTime
      isAvailable
      contractor1Phone
      contractor2Phone
      day
      time
      monthAsWord
      dayOfWeek
      dayAsNumber
      yearAsNumber
      timeAsString
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAvailableInstallations = /* GraphQL */ `
  mutation UpdateAvailableInstallations(
    $input: UpdateAvailableInstallationsInput!
    $condition: ModelAvailableInstallationsConditionInput
  ) {
    updateAvailableInstallations(input: $input, condition: $condition) {
      id
      assignedContractor1
      assignedContractor2
      startDateTime
      isAvailable
      contractor1Phone
      contractor2Phone
      day
      time
      monthAsWord
      dayOfWeek
      dayAsNumber
      yearAsNumber
      timeAsString
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAvailableInstallations = /* GraphQL */ `
  mutation DeleteAvailableInstallations(
    $input: DeleteAvailableInstallationsInput!
    $condition: ModelAvailableInstallationsConditionInput
  ) {
    deleteAvailableInstallations(input: $input, condition: $condition) {
      id
      assignedContractor1
      assignedContractor2
      startDateTime
      isAvailable
      contractor1Phone
      contractor2Phone
      day
      time
      monthAsWord
      dayOfWeek
      dayAsNumber
      yearAsNumber
      timeAsString
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createHomeEvent = /* GraphQL */ `
  mutation CreateHomeEvent(
    $input: CreateHomeEventInput!
    $condition: ModelHomeEventConditionInput
  ) {
    createHomeEvent(input: $input, condition: $condition) {
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
export const updateHomeEvent = /* GraphQL */ `
  mutation UpdateHomeEvent(
    $input: UpdateHomeEventInput!
    $condition: ModelHomeEventConditionInput
  ) {
    updateHomeEvent(input: $input, condition: $condition) {
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
export const deleteHomeEvent = /* GraphQL */ `
  mutation DeleteHomeEvent(
    $input: DeleteHomeEventInput!
    $condition: ModelHomeEventConditionInput
  ) {
    deleteHomeEvent(input: $input, condition: $condition) {
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
export const createContractor = /* GraphQL */ `
  mutation CreateContractor(
    $input: CreateContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    createContractor(input: $input, condition: $condition) {
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
export const updateContractor = /* GraphQL */ `
  mutation UpdateContractor(
    $input: UpdateContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    updateContractor(input: $input, condition: $condition) {
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
export const deleteContractor = /* GraphQL */ `
  mutation DeleteContractor(
    $input: DeleteContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    deleteContractor(input: $input, condition: $condition) {
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
export const createHomeowner = /* GraphQL */ `
  mutation CreateHomeowner(
    $input: CreateHomeownerInput!
    $condition: ModelHomeownerConditionInput
  ) {
    createHomeowner(input: $input, condition: $condition) {
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
export const updateHomeowner = /* GraphQL */ `
  mutation UpdateHomeowner(
    $input: UpdateHomeownerInput!
    $condition: ModelHomeownerConditionInput
  ) {
    updateHomeowner(input: $input, condition: $condition) {
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
export const deleteHomeowner = /* GraphQL */ `
  mutation DeleteHomeowner(
    $input: DeleteHomeownerInput!
    $condition: ModelHomeownerConditionInput
  ) {
    deleteHomeowner(input: $input, condition: $condition) {
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
export const createDecorationOrder = /* GraphQL */ `
  mutation CreateDecorationOrder(
    $input: CreateDecorationOrderInput!
    $condition: ModelDecorationOrderConditionInput
  ) {
    createDecorationOrder(input: $input, condition: $condition) {
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
export const updateDecorationOrder = /* GraphQL */ `
  mutation UpdateDecorationOrder(
    $input: UpdateDecorationOrderInput!
    $condition: ModelDecorationOrderConditionInput
  ) {
    updateDecorationOrder(input: $input, condition: $condition) {
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
export const deleteDecorationOrder = /* GraphQL */ `
  mutation DeleteDecorationOrder(
    $input: DeleteDecorationOrderInput!
    $condition: ModelDecorationOrderConditionInput
  ) {
    deleteDecorationOrder(input: $input, condition: $condition) {
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
export const createDecoration = /* GraphQL */ `
  mutation CreateDecoration(
    $input: CreateDecorationInput!
    $condition: ModelDecorationConditionInput
  ) {
    createDecoration(input: $input, condition: $condition) {
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
export const updateDecoration = /* GraphQL */ `
  mutation UpdateDecoration(
    $input: UpdateDecorationInput!
    $condition: ModelDecorationConditionInput
  ) {
    updateDecoration(input: $input, condition: $condition) {
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
export const deleteDecoration = /* GraphQL */ `
  mutation DeleteDecoration(
    $input: DeleteDecorationInput!
    $condition: ModelDecorationConditionInput
  ) {
    deleteDecoration(input: $input, condition: $condition) {
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
export const createDecorationOrderContractor = /* GraphQL */ `
  mutation CreateDecorationOrderContractor(
    $input: CreateDecorationOrderContractorInput!
    $condition: ModelDecorationOrderContractorConditionInput
  ) {
    createDecorationOrderContractor(input: $input, condition: $condition) {
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
export const updateDecorationOrderContractor = /* GraphQL */ `
  mutation UpdateDecorationOrderContractor(
    $input: UpdateDecorationOrderContractorInput!
    $condition: ModelDecorationOrderContractorConditionInput
  ) {
    updateDecorationOrderContractor(input: $input, condition: $condition) {
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
export const deleteDecorationOrderContractor = /* GraphQL */ `
  mutation DeleteDecorationOrderContractor(
    $input: DeleteDecorationOrderContractorInput!
    $condition: ModelDecorationOrderContractorConditionInput
  ) {
    deleteDecorationOrderContractor(input: $input, condition: $condition) {
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
