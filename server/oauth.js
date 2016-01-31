ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
        $set: {
            appId: Meteor.settings.facebookAppId,
            secret: Meteor.settings.facebookAppSecret
        }
    }
);


ServiceConfiguration.configurations.upsert(
    { service: "twitter" },
    {
        $set: {
            consumerKey: Meteor.settings.twitterApiKey,
            secret: Meteor.settings.twitterApiSecret
        }
    }
);

ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
        $set: {
            clientId: Meteor.settings.googleClientId,
            secret: Meteor.settings.googleClientSecret
        }
    }
);
