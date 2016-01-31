FlowRouter.route('/', {
    action() {
        ReactLayout.render(App, { content: <Home /> });
    }
});

FlowRouter.route('/create-listing', {
    action() {
        ReactLayout.render(App, { content: <CreateListing /> });
    }
});

FlowRouter.route('/listings', {
    action() {
        ReactLayout.render(App, { content: <Listings /> });
    }
});

// FlowRouter.route('/archivos', {
//     action() {
//         ReactLayout.render(App, { content: <Archives /> });
//     }
// });

// FlowRouter.route('/preferencias', {
//     action() {
//         ReactLayout.render(App, { content: <Settings /> });
//     }
// });
