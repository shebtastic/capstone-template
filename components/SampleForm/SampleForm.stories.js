import React from "react";
import SampleForm from ".";

export default {
  title: "SampleForm",
  component: SampleForm,
};

const Template = (args) => <SampleForm {...args} />;

export const BareForm = Template.bind({});
BareForm.args = {
  onSubmit: console.log,
};
