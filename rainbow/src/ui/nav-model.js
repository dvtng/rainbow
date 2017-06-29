import _ from 'lodash';
import { observable, action, computed } from 'mobx';
import { collapsedTree } from './tree';

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

    @observable storyFiles = null;

    @observable selectedFile = null;

    @observable stories = null;

    @observable selectedStory = null;

    @observable fileFilter = '';

    @action loadFileTree = () => {
        fetch('/story-list').then(resp => resp.json()).then(
            action(storyFiles => {
                this.storyFiles = storyFiles;
            })
        );
    };

    @action filterFiles = filter => {
        this.fileFilter = filter;
    };

    @action selectFile = storyFile => {
        this.selectedFile = storyFile;
        this.selectedStory = null;
        this.stories = null;
    };

    @action setStories = stories => {
        this.stories = sortStories(stories);
        if (!this.stories.includes(this.selectedStory)) {
            this.selectedStory = this.stories[0];
        }
    };

    @action selectStory = story => {
        this.selectedStory = story;
    };

    @computed get tree() {
        let storyFiles = this.storyFiles;
        if (!this.storyFiles) {
            return null;
        }

        storyFiles = this.storyFiles.slice();
        if (this.fileFilter) {
            storyFiles = _.filter(storyFiles, file =>
                file.includes(this.fileFilter)
            );
        }

        return collapsedTree(storyFiles, 'root');
    }
}
