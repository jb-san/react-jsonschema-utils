//@ts-nocheck
import * as React from 'react';
type Props = {
  schema: any;
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
  if (!schema) throw 'A Schema needs to be provided';

  return (
    <Object parent={schema} current={schema}>
      the snozzberries taste like snozzberries
    </Object>
  );
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

function Null() {
  return null;
}
function Boolean() {
  return true;
}
function Object({ parent, current }) {
  return true;
}
function Array() {
  return true;
}
function Number() {
  return true;
}
function String() {
  return true;
}
