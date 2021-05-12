/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const NEWLINE_REGEX = /\r\n?|\n/g;

function splitTextIntoParagraphs(text) {
  return text.split(NEWLINE_REGEX);
}

module.exports = splitTextIntoParagraphs;
