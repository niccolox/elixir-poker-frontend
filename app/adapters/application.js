import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: config.DS.host,
  namespace: config.DS.namespace,
  authorizer: 'authorizer:token'
});
