import { observable, action, computed } from 'mobx';

export default class NavModel {
    constructor(state) {
        Object.assign(this, state);
    }

    @observable fileTree = null;

    @observable selectedFile = null;

    @observable stories = null;

    @observable selectedStory = null;

    @computed
    get sortedStories() {
        if (this.stories == null) return this.stories;

        const withoutDefault = this.stories
            .filter(story => story !== 'default')
            .sort();
        return withoutDefault.length === this.stories.length
            ? withoutDefault
            : ['default'].concat(withoutDefault);
    }

    @action
    loadFileTree = () => {
        fetch('/story-list').then(resp => resp.json()).then(
            action(fileTree => {
                this.fileTree = fileTree;
            })
        );
    };

    @action
    selectStoryFile = storyFile => {
        this.selectedFile = storyFile;
        this.stories = null;
    };

    @action
    setStories = stories => {
        this.stories = stories;
        this.selectedStory = stories[0];
    };

    @action
    selectStory = story => {
        this.selectedStory = story;
    };
}
