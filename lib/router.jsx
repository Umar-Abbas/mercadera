FlowRouter.route('/', {
    action() {
        ReactLayout.render(App, { content: <Home /> });
    }
});

// FlowRouter.route('/login', {
//     action() {
//         ReactLayout.render(App, { anonContent: <Login /> });
//     }
// });

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
