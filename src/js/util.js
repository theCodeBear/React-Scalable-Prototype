'use strict';

// UTILITY FUNCTIONS FOR APP

function safe(data) {
  return JSON.parse(JSON.stringify(data));
}


export {
  safe
};
