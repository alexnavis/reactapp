'use strict';
const utilities = require('../../utilities');
const reactapp = utilities.reactapp();


module.exports = {
  'containers': {
    [`${reactapp.manifest_prefix}account/profile`]: {
      'layout': {
        'component': 'div',
        'props': {},
        'children': [{
          'component': 'Container',
          'props': {
            'style': {
              'marginTop': 80,
              'marginBottom': 80,
            },
          },
          'children': [{
            'component': 'ResponsiveForm',
            'thisprops': {
              'formdata': ['user', 'userdata', ],
            },
            'props': {
              'onSubmit': {
                'url': 'http://localhost:8786/r-admin/contentdata/accounts/:id?format=json',
                'options': {
                  'method': 'PUT',
                },
                'params': [{
                  'key': ':id',
                  'val': '_id',
                }, ],
                'success': true,
                'successCallback': 'func:this.props.debug',
              },
              'hiddenFields': [{
                'form_name': 'docid',
                'form_val': '_id',
              }, ],
              'flattenFormData': true,
              'footergroups': false,
              'formgroups': [{
                  'gridProps': {
                    'style': {
                      'marginTop': 30,
                      'padding': 10,
                    },
                  },
                  'formElements': [{
                      'type': 'layout',
                      'layoutProps': {
                        'style': {
                          'padding': 0,
                        },
                      },
                      'value': {
                        'component': 'div',
                        'children': [{
                          'component': 'Title',
                          'children': 'My Account',
                        }, ],
                        'props': {
                          'style': {
                            'padding': 0,
                          },
                        },
                      },
                    },
                    {
                      'type': 'submit',
                      'value': 'Save Changes',
                      'passProps': {
                        'style': {},
                      },
                      'layoutProps': {
                        'style': {
                          'alignSelf': 'flex-end',
                          'textAlign': 'right',
                          'padding': 0,
                        },
                      },
                    },
                  ],
                },
                {
                  'card': {
                    'props': {
                      'leftIcon': true,
                      'cardTitle': 'My account',
                    },
                  },
                  'formElements': [{
                      'type': 'text',
                      'label': 'activated',
                      'name': 'activated',
                    },
                    {
                      'type': 'hidden',
                      'label': 'activated',
                      'name': 'docid',
                      'formdata_name': '_id',
                    },
                    {
                      'type': 'text',
                      'name': 'email',
                      'label': 'email',
                      'passProps': {
                        'state': 'isDisabled',
                      },
                    },
                    {
                      'type': 'label',
                      'label': 'Just A Label',
                    },
                    {
                      'type': 'line',
                      'passProps': {
                        'style': {
                          'border': 'none',
                          'borderBottom': '1px solid #d3d6db',
                        },
                      },
                    },
                    {
                      'type': 'custom',
                      'name': 'custom',
                      'label': 'random custom',
                      'passProps': {
                        'state': 'isDisabled',
                      },
                    },
                    {
                      'type': 'text',
                      'name': 'testnull',
                      'label': 'testing null',
                      'value': 'null',
                      'passProps': {
                        'state': 'isDisabled',
                      },
                    },
                    {
                      'type': 'text',
                      'label': 'test zero',
                      'name': 'test zero',
                      'value': 0,
                      'passProps': {
                        'state': 'isDisabled',
                      },
                    },
                  ],
                },
              ],
            },
          }, ],
        }, ],
      },
      'resources': {},
      'onFinish': 'render',
      'pageData': {
        'title': 'Home',
        'navLabel': 'Home',
      },
    },
  },
};