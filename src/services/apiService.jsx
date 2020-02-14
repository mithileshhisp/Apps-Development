import { BaseUrl } from '../services/BaseUrlService';
export const ApiService = {
    getProgram,
    getProgramStage,
    getDataElements,
    getTrackedEntityInstance,
    postEvent,
    getUserData,
    getMetaData,
    getProgramRules,
    getProgramDetials
};
function getProgram(id) {
    const requestOptions = { method: 'GET' };
    return fetch(BaseUrl + '/api/organisationUnits/' + id + '.json?fields=id,name,programs[id,name,code]&paging=false', requestOptions).then(res => res.json());
}

function getProgramStage(id) {
    const requestOptions = { method: 'GET' };
    return fetch(BaseUrl+"/api/programs/"+id +".json?fields=id,name,programStages[id,name,code]&paging=false", requestOptions).then(res => res.json());
}

function getDataElements(id) {
    const requestOptions = { method: 'GET' };
    return fetch( BaseUrl+"/api/programStages/"+id+".json?fields=id,name,programStageSections[id,name,dataElements[id,name,formName,valueType]]&paging=false", requestOptions).then(res => res.json());
}

function getTrackedEntityInstance(data) {
    const requestOptions = { method: 'GET' };
    return fetch( BaseUrl + '/api/trackedEntityInstances.json?program=' + data.program + '&ou=' + data.ou + '', requestOptions).then(res => res.json());
}

function postEvent(event) {
    const requestOptions = { 
         method: 'POST',
         body: JSON.stringify(event), 
         headers: {
                'Content-Type': 'application/json'}
                };
    return fetch( BaseUrl + '/api/events', requestOptions).then(res => res.json());
}

function getUserData() {
    const requestOptions = { method: 'GET'};
    return fetch( BaseUrl + '/api/me.json?paging=false&fields=organisationUnits,userGroups,userCredentials[username]', requestOptions).then(res => res.json());
}

function getMetaData() {
    const requestOptions = { method: 'GET'};
    return fetch( BaseUrl + '/api/metadata.json?paging=false&fields=children,condition,code,dataElement,displayName,formName,id,name,options,organisationUnits,path,priority,program,programRuleActions[programRuleActionType,dataElement,optionGroup,content,trackedEntityAttribute,programStageSection,data],programStage,programStages[id,displayName,access,programStageDataElements[dataElement[id],compulsory],programStageSections[id,name,displayName,renderType,dataElements[id,displayFormName,code,valueType,optionSetValue,optionSet]]],trackedEntityTypeAttributes[name,id,displayName,valueType,unique,optionSetValue,optionSet,mandatory,trackedEntityAttribute[name,id,displayName,valueType,unique,optionSetValue,optionSet]],value&order=level:asc&constants=true&dataElements=true&optionGroups=true&options=true&optionSets=true&organisationUnits=true&programRules=true&programRuleVariables=true&programs=true&trackedEntityTypes=true', requestOptions).then(res => res.json());
}

function getProgramRules() {
    const requestOptions = { method: 'GET'};
    return fetch( BaseUrl + '/api/programRules.json?fields=id,name,condition,displayName,program[id,name],programRuleActions[programRuleActionType,dataElement[id,name,valueType]]&paging=false', requestOptions).then(res => res.json());
}

function getProgramDetials(id) {
    const requestOptions = { method: 'GET'};
    return fetch( BaseUrl + '/api/programs/'+id+'.json?fields=name,id,displayName,programRuleVariables[id,name,displayName,dataElement[id,name],program[id,name]],programStages[id,displayName,access,programStageDataElements[compulsory,dataElement[id,name,valueType]],programStageSections[id,name,displayName,dataElements[id,name,valueType,displayFormName,optionSetValue,optionSet[id,name,valueType,options[id,name,valueType]]]]&paging=false', requestOptions).then(res => res.json());
}

