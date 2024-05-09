import React from 'react';
import { VisibilityConditionalProps } from './interface';

export const VisibilityConditional: React.FC<VisibilityConditionalProps> = (props) => {
  const { condition, firstOption, secondOption } = props;

  return condition ? <>{firstOption()}</> : <>{secondOption()}</>;
};