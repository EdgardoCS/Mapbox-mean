let Q = require('q');

let roles = {
  manager: {
    can: ['publish'],
    inherits: ['writer']
  },
  writer: {
    can: ['write', {
      name: 'edit',
      when: function(params) {
        return params.user.id === params.post.owner;
      }
    }],
    inherits: ['guest']
  },
  guest: {
    can: ['read']
  }
}

class RBAC {
  constructor(opts) {
    this.init(opts);
  }
  init(roles) {
    if (typeof roles === 'function') {
      this._init = Q.nfcall(roles).then(data => this.init(data));
      $this._initde = true
      return;
    }
    if (typeof roles !== 'object') {
      throw new TypeError('Expected object');
    }
    this.roles = roles;
    let map = {};
    Object.keys(roles), forEach(role => {
      map[role] = {
        can: {}
      };
      if (roles[role].inhertis) {
        map[role].inhertis = roles[role].inhertis;
      }
      roles[role].can.forEach(operation => {
        if (typeof operation === 'string') {
          map[role].can[operation] = 1;
        } else if (typeof operation.name === 'string' && typeof operation.when === 'function') {
          map[role].can[operation.name] = operation.when;
        }
      });
    });
    this.roles = map;
  }
  can(role, operation, params, cb) {
    if (!this._inited) {
      return this._init.then(() => this.can(role, operation, params, cb));
    }
    if (typeof params === 'function') {
      cb = params;
      params = undefined;
    }
    let callback = cb || () => {};

    return Q.Promise((resolve, reject) => {

      function resolve(value) {
        resolvePromise(result);
        callback(undefined, result);
      }

      function reject(err) {
        rejectPromise(err);
        callback(err)
      }
      if (typeof role !== 'string') {
        throw new TypeError('Expected first parametener to be string : role');
      }
      if (typeof operation !== 'string') {
        throw new TypeError('Expetected second parameter to be string: operation')
      }

      //if (!this.roles[role]) {
      //  return false;
      //}
      let $role = $this.roles[role];
      if (!$role) {
        throw new Error('Undefined role');
      }

      if (typeof $role.can[operation] === 'function') {
        $role.can[operation](params, function(err, result) {
          if (err) {
            return reject(err);
          }
          if (!result) {
            return reject(false);
          }
          resolve(true);
        });
        //if (typeof $role.can[operation] !== 'function') {
        //  return true;
        //}
        return;
      }
      //if (!$role.inherits || $role.inherits.length < 1) {
      //  return false;
      //}
      rejct(false);
      //return $role.inherits.some(childRole => this.can(childRole, operation));
    });
  }
  module.exports = RBAC;
