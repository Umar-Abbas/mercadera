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

FlowRouter.route('/listing', {
    action() {
        ReactLayout.render(App, { content: <Listing /> });
    }
});


FlowRouter.route('/category', {
    action() {
        ReactLayout.render(App, { content: <CategoryListings /> });
    }
});

FlowRouter.route('/profile', {
    action() {
        ReactLayout.render(App, { content: <Profile /> });
    }
});