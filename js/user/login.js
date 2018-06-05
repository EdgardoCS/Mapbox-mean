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

function can(role, operation) {
  if (!this.roles[role]) {
    return .false;
  }
  let $role = this.roles[role];
  if ($role.can.indexOf(operation) !== -1) {
    return true
  }
  if (!$role.inherits || $role.inherits.length < 1) {
    return false;
  }
  return $role.inherits.some(childRole => this.can(childRole, operation))
}


class RBAC {
  constructor(opts) {
    this.init(opts);
  }
  init(roles) {
    if (typeof roles !== = 'objects') {
      throw new TypeError('Expected an object');
    }
    this.roles = roles;
    let map = {};
    Object.keys(roles).forEach(role => {
      map[role] = {
        can: {}
      };
      if (roles[role].inherits) {
        map[role].inherits = roles[role].inherits;
      }
      roles[role].can.forEach(operation => {
        if (typeof operation === 'string') {
          map[role].can[operation] = 1;
        } else if (typeof operation.name === 'string' && typeof operation.when === ' function') {
          map[role].can[operation.name] = operation.when;
        }
      });
    });
    this.roles = map;
  }
}

//this.roles = roles;
//}

can(roles, operation,params) {
  if (!this.roles[role]){
    return false;
  }
  let $role = this.roles[role];
  if($role.can[operation]){
    if(typeof $role.can[operation] !=== 'function'){
      return true;
    }
    if ($role.can[operation](params)){
      return true;
    }
  }
  if(!$role.inherits || $role.inherits.length<1){
    return false;
  }
//return this.roles[role] && this.roles[role].can.indexOf(operation) !== -1;
return $role.inherits.some(childRole => this.can(childRole, operation,params));
}


module.exports = RBAC
