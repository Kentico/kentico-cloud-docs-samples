// DocSection: schedule_unpublishing_add_filter
// Tip: Find more about JS/TS SDKs at https://docs.kontent.ai/javascript
const KontentDelivery = require('@kentico/kontent-delivery');
const _ = require('underscore');

// Create strongly typed models according to https://docs.kontent.ai/strongly-typed-models
class Article extends KontentDelivery.ContentItem {
    constructor() {
        super();
    }
}

const deliveryClient = new KontentDelivery.DeliveryClient({
    projectId: '14372844-0a5d-434a-8423-605b8a631623',
    typeResolvers: [
      new KontentDelivery.TypeResolver('article', (rawData) => new Article)
    ]
});

const d = new Date();
const now = d.toISOString();

deliveryClient.items()
    .type('article')
    .toObservable()
    .subscribe(response => console.log(_.filter(response.items, function (i) { 
        return ((i.PublishUntil > now || i.PublishUntil === undefined || i.PublishUntil === null))
    })));
// EndDocSection