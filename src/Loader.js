/**
 * Copyright 2015-present Zippy Technologies
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { PropTypes } from 'react';
import assign from 'object-assign';

const DEFAULT_CLASS_NAME = 'zippy-react-load-mask__loader';
const LOADBAR_CLASSNAME = `${DEFAULT_CLASS_NAME}-loadbar`;

const notEmpty = s => !!s;

export default class ZippyLoader extends React.Component {
  render() {
    const props = this.props;

    const style = assign({}, props.style, {
      width: props.size,
      height: props.size
    });

    const className = [
      props.className,
      DEFAULT_CLASS_NAME,
      props.theme && `${DEFAULT_CLASS_NAME}--theme-${props.theme}`
    ]
      .filter(notEmpty)
      .join(' ');

    return (
      <div style={style} className={className}>
        <div className={`${LOADBAR_CLASSNAME} ${LOADBAR_CLASSNAME}--1`} />
        <div className={`${LOADBAR_CLASSNAME} ${LOADBAR_CLASSNAME}--2`} />
        <div className={`${LOADBAR_CLASSNAME} ${LOADBAR_CLASSNAME}--3`} />
        <div className={`${LOADBAR_CLASSNAME} ${LOADBAR_CLASSNAME}--4`} />
        <div className={`${LOADBAR_CLASSNAME} ${LOADBAR_CLASSNAME}--5`} />
        <div className={`${LOADBAR_CLASSNAME} ${LOADBAR_CLASSNAME}--6`} />
        <div className={`${LOADBAR_CLASSNAME} ${LOADBAR_CLASSNAME}--7`} />
        <div className={`${LOADBAR_CLASSNAME} ${LOADBAR_CLASSNAME}--8`} />
        <div className={`${LOADBAR_CLASSNAME} ${LOADBAR_CLASSNAME}--9`} />
        <div className={`${LOADBAR_CLASSNAME} ${LOADBAR_CLASSNAME}--10`} />
        <div className={`${LOADBAR_CLASSNAME} ${LOADBAR_CLASSNAME}--11`} />
        <div className={`${LOADBAR_CLASSNAME} ${LOADBAR_CLASSNAME}--12`} />
      </div>
    );
  }
}

ZippyLoader.propTypes = { size: PropTypes.number, theme: PropTypes.string };
ZippyLoader.defaultProps = { size: 40 };
