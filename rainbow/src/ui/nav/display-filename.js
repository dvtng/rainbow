import Case from 'case';

const fileNamePattern = /(.*)\.story\.(.*)$/;

export default name => {
    const matches = fileNamePattern.exec(name);
    return matches ? Case.sentence(matches[1]) : name;
};
