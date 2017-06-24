import { observable, action } from 'mobx';

export default class NavModel {
    @observable selectedStoryFile = null;

    @observable stories = null;

    @action
    selectStoryFile = storyFile => {
        this.selectedStoryFile = storyFile;
    };

    @action
    setStories = stories => {
        this.stories = stories;
    };
}
