export const formState = {
  customerName: 'Some Test Client',
  address: 'Some Test Client Address',
  plotLength: '1000',
  plotWidth: '1000',
  totalBuiltupArea: '1000',
  numOfFloors: '1',
  projectType: 'Residential Building',
  constructionQuality: 'Standard',
  mobileNo: '9898989898',
  mailId: 'someclient@example.com',
};

export const customerName = {
  title: 'Customer Name',
  fieldName: 'customerName',
  id: 'customerName',
};

export const address = {
  title: 'Address',
  fieldName: 'address',
  id: 'address',
  type: 'textarea',
};

export const plotLength = {
  title: 'Plot Length',
  fieldName: 'plotLength',
  id: 'plotLength',
  placeholder: 'in Sq.Ft',
  type: 'number',
};

export const plotWidth = {
  title: 'Plot Width',
  fieldName: 'plotWidth',
  id: 'plotWidth',
  placeholder: 'in Sq.Ft',
  type: 'number',
};

export const totalBuiltupArea = {
  title: 'Total Builtup Area',
  fieldName: 'totalBuiltupArea',
  id: 'totalBuiltupArea',
  placeholder: 'in Sq.Ft',
  type: 'number',
};

export const numberOfFloors = {
  title: 'Number of Floors',
  fieldName: 'numOfFloors',
  id: 'numOfFloors',
  type: 'select',
  options: [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
  ],
};

export const projectType = {
  title: 'Project Type',
  fieldName: 'projectType',
  id: 'projectType',
  type: 'select',
  options: [],
  labelKey: 'projectName',
  valueKey: 'projectName',
};

export const constructionQuality = {
  title: 'Construction Quality',
  fieldName: 'constructionQuality',
  id: 'constructionQuality',
  type: 'select',
  options: [],
  labelKey: 'name',
  valueKey: 'name',
};

export const mobileNo = {
  title: 'Mobile Number',
  fieldName: 'mobileNo',
  id: 'mobileNo',
  type: 'number',
};

export const mailId = {
  title: 'Email Id',
  fieldName: 'mailId',
  id: 'mailId',
};
