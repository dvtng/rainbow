import { observable, action, computed } from 'mobx';

const sortStories = stories => {
    const withoutDefault = stories.filter(story => story !== 'default').sort();
    return withoutDefault.length === stories.length
        ? withoutDefault
        : ['default'].concat(withoutDefault);
};

export default class NavModel {
    constructor(state) {
        Object.assign(this, state);
    }

    @observable fileTree = null;

    @observable selectedFile = null;

    @observable stories = null;

    @observable selectedStory = null;

    @action
    loadFileTree = () => {
        fetch('/story-list').then(resp => resp.json()).then(
            action(fileTree => {
                this.fileTree = fileTree;
            })
        );
    };

    @action
    selectFile = storyFile => {
        this.selectedFile = storyFile;
        this.stories = null;
    };

    @action
    setStories = stories => {
        this.stories = sortStories(stories);
        this.selectedStory = this.stories[0];
    };

    @action
    selectStory = story => {
        this.selectedStory = story;
    };
}
