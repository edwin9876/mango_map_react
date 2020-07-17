import React from "react";
import TripSummary from '../Dashboard/TripSummary'
import GroupSummary from '../Dashboard/GroupSummary'
import PostSummary from '../Dashboard/PostSummary'

const components = {
sectionA: TripSummary,
sectionB: GroupSummary,
sectionC: PostSummary
};

function DynamicComponent(props) {
  const Select = components[props.section];
  return <Select />;
}

export default DynamicComponent;