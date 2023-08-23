import { Fragment } from 'react';
import { CardGroup } from 'reactstrap';
import Title from '../common/Title';
import Testimonial from './Testimonial';

const testimonialsData = [
  {
    title: 'Enter Details',
    text: `Enter the details of the property e.g. Address, Length & Width of
    Plot, Builtup Area of Structure, No. of Floors, Type of Structure,
    Quality of Construction etc.`,
  },
  {
    title: 'View Estimate Amount',
    text: `After submiting the details, view the estimate amount generated
    for the inputs given.`,
  },
  {
    title: 'Payment',
    text: `Once you have confirmed the estimate amount and satisfied with it,
    confirm and pay the charges.`,
  },
  {
    title: 'Download the Estimate',
    text: `Once you have completed the transaction your estimate download
    will start automatically. A mail will also be sent on provided
    mail id.`,
  },
];

const Testimonials = () => {
  return (
    <Fragment>
      <Title title="How it works!!" />
      <CardGroup>
        {testimonialsData.map((testimonial) => (
          <Testimonial key={testimonial.title} {...testimonial} />
        ))}
      </CardGroup>
    </Fragment>
  );
};

export default Testimonials;
