import { observable, action } from 'mobx';

export default class NavModel {
    @observable selectedStoryFile = null;

    @action
    selectStoryFile = storyFile => {
        this.selectedStoryFile = storyFile;
    };
}
