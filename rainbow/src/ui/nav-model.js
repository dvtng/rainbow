import { observable, action } from 'mobx';

export default class NavModel {
    constructor(state) {
        Object.assign(this, state);
    }

    @observable fileTree = null;

    @observable selectedStoryFile = null;

    @observable stories = null;

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
        this.selectedStoryFile = storyFile;
    };

    @action
    setStories = stories => {
        this.stories = stories;
    };
}
