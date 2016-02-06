FlowRouter.route('/', {
    action() {
        ReactLayout.render(App, { content: <Home /> });
    }
});

FlowRouter.route('/nuevo-anuncio', {
    action() {
        ReactLayout.render(App, { content: <CreateListing /> });
    }
});

FlowRouter.route('/anuncios/:automoviles', {
    action() {
        ReactLayout.render(App, { content: <Listings /> });
    }
});

FlowRouter.route('/category', {
    action() {
        ReactLayout.render(App, { content: <Categories /> });
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
