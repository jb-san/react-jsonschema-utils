//@ts-nocheck

//https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.1

import React, { Fragment } from 'react';
import mock from './__mocks__/simple.json';
type Props = {
  schema?: any;
  data?: any;
  components?: any;
  context?: any;
};
export const JSONSchemaRenderer = ({
  schema,
  data,
  components,
  context,
}: Props) => {
  // if (!schema) throw 'A Schema needs to be provided';

  return <Object parent={schema} current={schema} />;
  // return <div>asdasd</div>;
};

/**
 * PrimitiveTypes
 * https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.1
 *
 * null
 * boolean
 * object
 * array
 * number
 * string
 */
function TypeSwitch({ type, value }) {
  switch (type) {
    case 'null':
      return <Null {...value} />;
    case 'boolean':
      return <Boolean {...value} />;
    case 'object':
      return <Object {...value} />;
    case 'array':
      return <Array {...value} />;
    case 'number':
      return <Number {...value} />;
    case 'string':
      return <String {...value} />;
    default:
      //TODO: maybe throw an error ? because its not one of the jsonschema types
      return null;
  }
}

export function Null({ type, description, title }) {
  return <div>null</div>;
}
function Boolean({ type, title, description }) {
  return <div>Boolean</div>;
}
function Object({ parent, current }) {
  const { properties } = current;
  return <div>object</div>;
  // return Object.keys(properties).map((key, index) => {
  //   const value = properties[key];
  //   const { type } = value;
  //   return (
  //     <Fragment>
  //       <div>object</div>
  //       <TypeSwitch type={type} value={value} />;
  //     </Fragment>
  //   );
  // });
}
function Array({ type, title, items }) {
  const { type: itemType } = items;
  return (
    <Fragment>
      <div>Array</div>
      <TypeSwitch type={itemType} value={items}></TypeSwitch>;
    </Fragment>
  );
}

// enum is a keyword so renamed to xnum, cuz... cool
function Number({ title, type, enum: xnum }) {
  return <div>Number</div>;
}
function String({ type, title, enum: xnum }) {
  return <div>String</div>;
}
