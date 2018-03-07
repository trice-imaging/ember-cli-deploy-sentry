import Ember from 'ember';
import RavenService from 'ember-cli-sentry/services/raven';

export default RavenService.extend({
    releaseMetaName: 'sentry:revision',
    release: Ember.computed('releaseMetaName', {
        get: function() {
            return document.querySelector(`meta[name='${this.get('releaseMetaName')}']`).content;
        }
    })
});

