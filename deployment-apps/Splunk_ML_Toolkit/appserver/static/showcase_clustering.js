webpackJsonp([11],{0:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__.p=function(){function make_url(){for(var seg,len,output="",i=0,l=arguments.length;i<l;i++)seg=arguments[i].toString(),len=seg.length,len>1&&"/"==seg.charAt(len-1)&&(seg=seg.substring(0,len-1)),output+="/"!=seg.charAt(0)?"/"+seg:seg;if("/"!=output){var segments=output.split("/"),firstseg=segments[1];if("static"==firstseg||"modules"==firstseg){var postfix=output.substring(firstseg.length+2,output.length);output="/"+firstseg+"/@"+window.$C.BUILD_NUMBER,window.$C.BUILD_PUSH_NUMBER&&(output+="."+window.$C.BUILD_PUSH_NUMBER),"app"==segments[2]&&(output+=":"+getConfigValue("APP_BUILD",0)),output+="/"+postfix}}var root=getConfigValue("MRSPARKLE_ROOT_PATH","/"),djangoRoot=getConfigValue("DJANGO_ROOT_PATH",""),locale=getConfigValue("LOCALE","en-US"),combinedPath="";return combinedPath=djangoRoot&&output.substring(0,djangoRoot.length)===djangoRoot?output.replace(djangoRoot,djangoRoot+"/"+locale.toLowerCase()):"/"+locale+output,""==root||"/"==root?combinedPath:root+combinedPath}function getConfigValue(key,defaultValue){if(window.$C&&window.$C.hasOwnProperty(key))return window.$C[key];if(void 0!==defaultValue)return defaultValue;throw new Error("getConfigValue - "+key+" not set, no default provided")}return make_url("/static/app/Splunk_ML_Toolkit/")+"/"}(),__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("shim/jquery"),__webpack_require__(48),__webpack_require__("splunkjs/mvc/dropdownview"),__webpack_require__("splunkjs/mvc/simpleform/input/submit"),__webpack_require__("splunkjs/mvc/utils"),__webpack_require__("splunkjs/mvc/visualizationregistry"),__webpack_require__("views/shared/results_table/renderers/StringCellRenderer"),__webpack_require__(264),__webpack_require__(230),__webpack_require__(234),__webpack_require__(236),__webpack_require__(240),__webpack_require__(242),__webpack_require__(44),__webpack_require__(243),__webpack_require__(266),__webpack_require__(289),__webpack_require__(286),__webpack_require__(249),__webpack_require__(261),__webpack_require__(235),__webpack_require__(239),__webpack_require__(251)],__WEBPACK_AMD_DEFINE_RESULT__=function(_jquery,_underscoreMltk,_dropdownview,_submit,_utils,_visualizationregistry,_StringCellRenderer,_AlgorithmParamsGroup,_Master,_DrilldownLinker,_QueryHistoryTable,_SearchStringDisplay,_compactTemplateString,_Options,_ShowcaseHistorySerializer,_ControlValidityStore,_ClusteringAlertModal,_Master3,_EnhancedMultiDropdownView,_EnhancedTextInputView,_Forms,_Searches,_BaseAssistantView){"use strict";function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj["default"]=obj,newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var _jquery2=_interopRequireDefault(_jquery),_underscoreMltk2=_interopRequireDefault(_underscoreMltk),_dropdownview2=_interopRequireDefault(_dropdownview),_submit2=_interopRequireDefault(_submit),_utils2=_interopRequireDefault(_utils),_visualizationregistry2=_interopRequireDefault(_visualizationregistry),_StringCellRenderer2=_interopRequireDefault(_StringCellRenderer),_AlgorithmParamsGroup2=_interopRequireDefault(_AlgorithmParamsGroup),_Master2=_interopRequireDefault(_Master),DrilldownLinker=_interopRequireWildcard(_DrilldownLinker),_QueryHistoryTable2=_interopRequireDefault(_QueryHistoryTable),_compactTemplateString2=_interopRequireDefault(_compactTemplateString),_Options2=_interopRequireDefault(_Options),_ShowcaseHistorySerializer2=_interopRequireDefault(_ShowcaseHistorySerializer),_ControlValidityStore2=_interopRequireDefault(_ControlValidityStore),_ClusteringAlertModal2=_interopRequireDefault(_ClusteringAlertModal),_Master4=_interopRequireDefault(_Master3),_EnhancedMultiDropdownView2=_interopRequireDefault(_EnhancedMultiDropdownView),_EnhancedTextInputView2=_interopRequireDefault(_EnhancedTextInputView),Forms=_interopRequireWildcard(_Forms),Searches=_interopRequireWildcard(_Searches),_BaseAssistantView2=_interopRequireDefault(_BaseAssistantView),_templateObject=_taggedTemplateLiteral(["| kvstorelookup ",'\n                                       | eval "Search query"=search_query,\n                                         "Clustering Algorithm" = algorithm, \n                                         "Fields to use for clustering" = cluster_variable,\n                                         "Algorithm Parameters" = algorithm_params, \n                                         "Pre-process Settings" = preprocess_query,\n                                         "Model Name" = cluster_model_name, \n                                         "Actions" = actions'],["| kvstorelookup ",'\n                                       | eval "Search query"=search_query,\n                                         "Clustering Algorithm" = algorithm, \n                                         "Fields to use for clustering" = cluster_variable,\n                                         "Algorithm Parameters" = algorithm_params, \n                                         "Pre-process Settings" = preprocess_query,\n                                         "Model Name" = cluster_model_name, \n                                         "Actions" = actions']),_templateObject2=_taggedTemplateLiteral(["| loadjob $",'$\n                                       | head 1\n                                       | transpose\n                                       | fields column\n                                       | search column != "column" AND column != "_*"'],["| loadjob $",'$\n                                       | head 1\n                                       | transpose\n                                       | fields column\n                                       | search column != "column" AND column != "_*"']),ClusteringView=_BaseAssistantView2["default"].extend({headerOptions:{title:"Cluster Numeric Events",description:"Partition events with multiple numeric fields into clusters."},tabOptions:{primaryTabTitle:"Cluster Numeric Events",historyTabTitle:"Load Existing Settings"},showScheduleButton:!0,submitButtonText:"Cluster",searchBarTooltip:"The events returned should contain at least two numeric fields.",render:function(){function updateExperiment(){self.addBasicExperimentInfo();var preprocessingModels=self.assistantFormView.preprocessPanel.preprocessCollection.models,searchStages=_underscoreMltk2["default"].map(preprocessingModels,function(model){return model.asSearchStage()}),mainSearchStage={type:"main",settings:{algorithm:algorithmControl.val(),params:getAlgorithmParamsList(),targetVariable:"",featureVariables:clusterVariableControl.val(),modelName:Forms.getToken("modelNameToken")||""}};searchStages.push(mainSearchStage),self.model.experiment.set({searchStages:searchStages})}function loadSavedPreprocessedSearch(sampleSearch){self.assistantFormView.tabs.activate("primaryTab"),currentSampleSearch=_underscoreMltk2["default"].extend({},{algorithm:defaultClusteringAlgorithm,algorithmParams:[]},sampleSearch),algorithmControl.val(currentSampleSearch.algorithm);var algorithmSettings=clusteringAlgorithmSettings[currentSampleSearch.algorithm];null!=algorithmSettings&&algorithmParamsControls.load(currentSampleSearch.algorithmParams,algorithmSettings.params),null!=currentSampleSearch.modelName&&modelNameInputControl.val(currentSampleSearch.modelName),self.assistantFormView.searchBarControl.setProperties(sampleSearch.value,sampleSearch.earliestTime,sampleSearch.latestTime)}function updateForm(newIsRunningValue,message){if(null!=newIsRunningValue&&(isRunning=newIsRunningValue),algorithmControl.settings.set("disabled",isRunning),clusterVariableControl.settings.set("disabled",isRunning),algorithmParamsControls.setDisabled(isRunning),canSaveModel()&&modelNameInputControl.settings.set("disabled",isRunning),clusteringPanel.visualizeVariableControl.settings.set("disabled",isRunning),self.assistantFormView.preprocessPanel.setDisabled(isRunning),isRunning)self.assistantFormView.footer.setDisabled(isRunning,message);else{var clusterVariablesToken=Forms.getToken("clusterVariablesToken"),fieldsValid=null!=clusterVariablesToken&&clusterVariablesToken.length>0;self.assistantFormView.footer.setDisabled(!fieldsValid,self.submitButtonText)}}function canSaveModel(){var algorithmSettings=clusteringAlgorithmSettings[algorithmControl.val()];return null!=algorithmSettings&&algorithmSettings.savesModel}function getClusteringFitArray(){var fitSPLArray=self.assistantFormView.preprocessPanel.buildFitSPLArray(Forms.getToken("modelNameToken"));return fitSPLArray.concat(clusteringFitSPL)}function getClusteringFitCommentsArray(){var fitSPLArray=self.assistantFormView.preprocessPanel.buildFitSPLArray(Forms.getToken("modelNameToken")),commentsArray=new Array(fitSPLArray.length);return commentsArray.length>0&&(commentsArray[0]="apply preprocessing steps"),commentsArray.concat("cluster the selected variables "+(canSaveModel()?"and save into a model":""))}function getClusteringApplyArray(){var applySPLArray=self.assistantFormView.preprocessPanel.buildApplySPLArray(Forms.getToken("modelNameToken"));return applySPLArray.concat("| apply $modelNameToken|s$")}function getClusteringApplyCommentsArray(){var applySPLArray=self.assistantFormView.preprocessPanel.buildApplySPLArray(Forms.getToken("modelNameToken")),commentsArray=new Array(applySPLArray.length);return commentsArray.length>0&&(commentsArray[0]="apply preprocessing models"),commentsArray.concat("apply the clustering model")}function getAlgorithmParamsList(){var algorithmSettings=clusteringAlgorithmSettings[algorithmControl.val()];return null!=algorithmSettings?algorithmParamsControls.serialize(algorithmSettings.params):[]}function updateAlgorithmParamsToken(){Forms.setToken("algorithmParamsToken",getAlgorithmParamsList().join(" "))}function parseOldPreprocessingSettings(kvstoreRecord){var settings=[],fields=_underscoreMltk2["default"].asArray(kvstoreRecord["row.preprocessed_variable"]),applySS=null!=kvstoreRecord["row.apply_ss"]&&"0"!=kvstoreRecord["row.apply_ss"];return applySS&&settings.push(JSON.stringify({method:"StandardScaler",fields:fields})),null!=kvstoreRecord["row.apply_dr"]&&"0"!=kvstoreRecord["row.apply_dr"]&&settings.push(JSON.stringify({method:kvstoreRecord["row.dr_method"],fields:applySS?["SS_*"]:fields,params:["k="+kvstoreRecord["row.dr_num"]]})),settings}var self=this;_BaseAssistantView2["default"].prototype.render.call(this);var _utils$getPageInfo=_utils2["default"].getPageInfo(),appName=_utils$getPageInfo.app,showcaseName=_utils$getPageInfo.page,defaultModelName=_Options2["default"].getOptionByName("defaultModelName"),defaultClusteringAlgorithm="KMeans",clusteringFitSPL="| fit $algorithmToken$ $algorithmParamsToken$ $clusterVariablesToken$ $modelFitToken$",currentSampleSearch=null,isRunning=!1,controlValidity=new _ControlValidityStore2["default"],clusteringAlgorithmSettings={KMeans:{savesModel:!0,params:["k"]},DBSCAN:{savesModel:!1,params:["eps"]},Birch:{savesModel:!0,params:["k"]},SpectralClustering:{savesModel:!1,params:["k"]}},clusteringPanel$El=this.$el.find("#clusteringPanel"),vizOptions=DrilldownLinker.parseVizOptions({category:"custom",type:appName+".ScatterplotMatrixViz"}),historyCollectionId=showcaseName+"_history",historySerializer=new _ShowcaseHistorySerializer2["default"](historyCollectionId,{_time:null,search_query:null,earliest_time:null,latest_time:null,preprocess_query:null,algorithm:null,algorithm_params:null,cluster_variable:null,cluster_model_name:null},function(){Searches.startSearch("queryHistorySearch")});this.assistantFormView.preprocessPanel.render().$el.appendTo(self.assistantFormView.preprocessWrapper);var clusteringPanel=function(){var ClusteringViz=_visualizationregistry2["default"].getVisualizer(appName,"ScatterplotMatrixViz"),panel=new _Master2["default"]({el:clusteringPanel$El,title:"Cluster Visualization",viz:ClusteringViz,tooltip:"The events, colored by cluster.",vizOptions:{id:"clusteringViz",managerid:"visualizeSearch"},footerButtons:{scheduleAlertButton:!0}});return panel.viz.$el.on("hasNonNumericDataEvent",function(errorMessage){self.showErrorMessage(errorMessage),self.hideResults()}),panel.visualizeVariableControl=function(){var visualizeVariableControl=new _EnhancedMultiDropdownView2["default"]({id:"visualizeVariableControl",managerid:"variableSearch",el:(0,_jquery2["default"])("<div>"),labelField:"column",valueField:"column",width:960});return visualizeVariableControl.on("change",function(values){panel.visualizeSubmitControl.settings.set("formReady",values.length>0)}),visualizeVariableControl.render(),visualizeVariableControl}(),panel.visualizeSubmitControl=function(){var visualizeSubmitControl=new _submit2["default"]({id:"visualizeSubmitControl",el:(0,_jquery2["default"])("<div>"),text:"Visualize"});return visualizeSubmitControl.on("submit",function(){var visualizeVariableString=panel.visualizeVariableControl.val().map(Forms.escape).join(", ");Forms.setToken("visualizeVariableToken",'| eval cluster= "Cluster: " + cluster | table cluster, '+visualizeVariableString+" "),Searches.startSearch("visualizeSearch")}),visualizeSubmitControl.$el.find("button").removeClass("btn-primary").addClass("btn-default"),visualizeSubmitControl.settings.set("formReady",!1),visualizeSubmitControl.render(),visualizeSubmitControl}(),panel.fieldsWrapper=(0,_jquery2["default"])("<div>").addClass("mlts-visualize-picker"),panel.fieldsWrapper.insertAfter(panel.header).append(panel.visualizeVariableControl.$el,panel.visualizeSubmitControl.$el),panel}();!function(){Searches.setSearch("queryHistorySearch",{searchString:(0,_compactTemplateString2["default"])(_templateObject,historyCollectionId)})}(),function(){var preprocessColumnName="Pre-process Settings",queryHistoryPanel=new _QueryHistoryTable2["default"](self.$el.find("#queryHistoryPanel"),"queryHistorySearch",historyCollectionId,["Actions","_time","Search query",preprocessColumnName,"Clustering Algorithm","Fields to use for clustering","Algorithm Parameters","Model Name"],self.submitButtonText,function(params,autostart){var sampleSearch={value:params.data["row.search_query"],earliestTime:params.data["row.earliest_time"],latestTime:params.data["row.latest_time"],algorithm:params.data["row.algorithm"],clusterVariable:_underscoreMltk2["default"].asArray(params.data["row.cluster_variable"]),algorithmParams:_underscoreMltk2["default"].asArray(params.data["row.algorithm_params"]),modelName:params.data["row.cluster_model_name"],autostart:autostart},preprocessSteps=null!=params.data["row.preprocess_query"]?params.data["row.preprocess_query"]:parseOldPreprocessingSettings(params.data);null!=preprocessSteps&&(sampleSearch.preprocessSteps=preprocessSteps),loadSavedPreprocessedSearch(sampleSearch)}),stringCellRenderer=new _StringCellRenderer2["default"];queryHistoryPanel.viz.on("rendered",function(){var preprocessCellIndex=queryHistoryPanel.options.fields.indexOf(preprocessColumnName);preprocessCellIndex>=0&&this.$el.find("tbody").find("tr").each(function(i){var cell=(0,_jquery2["default"])((0,_jquery2["default"])(this).children("td")[preprocessCellIndex]),cellData=queryHistoryPanel.getDrilldownData({rowIndex:i}),preprocessQuery=cellData["row.preprocess_query"];if(null==preprocessQuery||""===preprocessQuery||preprocessQuery===[]){var parsedPreprocessQuery=parseOldPreprocessingSettings(cellData);stringCellRenderer.render(cell,{value:parsedPreprocessQuery})}})}),queryHistoryPanel.render()}();var algorithmParamsControls=function(){function onControlChange(){var isValid=this.getValidity();controlValidity.set(this.id,isValid),isValid&&updateAlgorithmParamsToken()}var controls=new _AlgorithmParamsGroup2["default"](self.$el.find("#algorithmParamsControlsWrapper"));return controls.addControl("k",new _EnhancedTextInputView2["default"]({id:"kControl",el:(0,_jquery2["default"])("<div>"),"default":2,validator:{type:"number",message:"Value must be a positive integer.",allowFloats:!1,min:1}}).on("change",onControlChange).render(),"K (# of centroids)","Specify the number of clusters."),controls.addControl("eps",new _EnhancedTextInputView2["default"]({id:"epsControl",el:(0,_jquery2["default"])("<div>"),"default":.2,validator:{type:"number",message:"Value must be a positive number.",min:0,minExclusive:!0}}).on("change",onControlChange).render(),"eps (radius of neighborhood)","Specify the number of clusters."),controls}(),algorithmControl=function(){var control=new _dropdownview2["default"]({id:"algorithmControl",el:self.$el.find("#algorithmControl"),showClearButton:!1,choices:[{label:"K-means",value:"KMeans"},{label:"DBSCAN",value:"DBSCAN"},{label:"Birch",value:"Birch"},{label:"Spectral Clustering",value:"SpectralClustering"}]});return control.$el.prev("label").tooltip({title:"Select the algorithm to use for clustering."}),control.on("change",function(value){Forms.setToken("algorithmToken",value),controlValidity.clear(_underscoreMltk2["default"].map(algorithmParamsControls.controls,function(paramControl){return paramControl.control.id}));var algorithmSettings=clusteringAlgorithmSettings[value];null!=algorithmSettings&&algorithmParamsControls.activate(algorithmSettings.params),updateAlgorithmParamsToken()}),control.render(),control}(),clusterVariableControl=function(){var control=new _EnhancedMultiDropdownView2["default"]({id:"clusterVariableControl",managerid:"variableSearch",el:self.$el.find("#clusterVariableControl"),labelField:"column",valueField:"column",width:400});return control.$el.prev("label").tooltip({title:"Events will be clustered based on the values of these fields."}),control.on("datachange",function(){if(null!=currentSampleSearch&&self.assistantFormView.preprocessPanel.isPreprocessingComplete()){var choices=Forms.getChoiceViewChoices(control),validChoices=Forms.intersect(choices,currentSampleSearch.clusterVariable,!0);control.val(validChoices),currentSampleSearch.autostart!==!1&&self.assistantFormView.footer.controls.submitButton.trigger("submit"),currentSampleSearch=null}}),control.on("change",function(){var values=control.val();null!=values&&values.length>0?Forms.setToken("clusterVariablesToken",control.val().map(Forms.escape).join(" ")):Forms.unsetToken("clusterVariablesToken"),updateForm()}),control.render(),control}(),modelNameInputControl=function(){function updateModelNameToken(){if(canSaveModel()){control.$el.tooltip("destroy"),control.settings.set("disabled",!1);var _modelName=control.val(),isValid=control.getValidity();controlValidity.set(control.id,isValid),isValid&&Forms.setToken("modelNameToken",null==_modelName||0===_modelName.length?defaultModelName:_modelName),Forms.getToken("modelNameToken")===defaultModelName?(self.assistantFormView.footer.setSchedulingDisabled(!0,"You must specify a model name to fit a model on a schedule."),clusteringPanel.setSchedulingDisabled(!0,"You must specify a model name to schedule alerts.")):(self.assistantFormView.footer.setSchedulingDisabled(!1),clusteringPanel.setSchedulingDisabled(!1))}else Forms.setToken("modelNameToken",""),controlValidity.clear(control.id),control.$el.tooltip({title:"This algorithm doesn't save models."}),control.settings.set("disabled",!0),self.assistantFormView.footer.setSchedulingDisabled(!0,"This algorithm doesn't support scheduled model fitting."),clusteringPanel.setSchedulingDisabled(!0,"This algorithm doesn't support scheduled alerts.");var modelName=Forms.getToken("modelNameToken");Forms.setToken("modelFitToken",modelName.length>0?'into "'+modelName+'"':"")}var control=new _EnhancedTextInputView2["default"]({id:"modelNameInputControl",el:self.$el.find("#modelNameInputControl"),validator:{type:"modelName"},changeOnKeyup:!0,optional:!0}).render();return control.$el.prev("label").tooltip({title:"Enter a name for the learned cluster model."}),control.on("change",updateModelNameToken),control.trigger("change"),algorithmControl.on("change",function(){return control.trigger("change")}),control._viz.on("keyup",function(event){13===event.keyCode&&self.assistantFormView.footer.controls.submitButton.trigger("submit")}),control}();return this.assistantFormView.searchBarControl.events.on("change",function(){Forms.clearChoiceView(clusterVariableControl,!0),Forms.clearChoiceView(clusteringPanel.visualizeVariableControl,!0),Forms.unsetToken("clusterVariablesToken","visualizeVariableToken"),updateForm(),Searches.cancelSearch("clusteringSearch"),Searches.startSearch("searchBarSearch")}),this.assistantFormView.footer.controls.submitButton.on("submit",function(){!self.assistantFormView.footer.getDisabled()&&controlValidity.getAll()&&(self.hideErrorMessage(),self.hideResults(),Forms.setToken("preprocessFitSPLToken",self.assistantFormView.preprocessPanel.buildFitSPLArray(Forms.getToken("modelNameToken")).join("")),self.model.experiment?(updateExperiment(),self.model.experiment.save({},{success:function(model,response){Searches.startSearch("clusteringSearch")},error:function(model,response){self.showErrorMessage(response.responseText)}})):Searches.startSearch("clusteringSearch"))}),this.listenTo(self.assistantFormView.preprocessPanel,"stepChanged",function(){Forms.clearChoiceView(clusterVariableControl,!0)}),this.listenTo(this.assistantFormView.preprocessPanel.preprocessCollection,"change:state",function(){updateForm(this.assistantFormView.preprocessPanel.isPreprocessingRunning(),"Preprocessing...")}),function(){var searchBarSearch=Searches.getSearchManager("searchBarSearch");searchBarSearch.on("onStartCallback",function(){self.hideErrorMessage(),self.hideResults()}),searchBarSearch.on("onDoneCallback",function(){null!=currentSampleSearch&&null!=currentSampleSearch.preprocessSteps&&self.assistantFormView.preprocessPanel.loadSteps(currentSampleSearch.preprocessSteps),self.hideErrorMessage()}),searchBarSearch.on("onErrorCallback",function(errorMessage){self.showErrorMessage(errorMessage),self.hideResults()})}(),function(){self.assistantFormView.footer.controls.openInSearchButton.on("click",function(){var search=DrilldownLinker.createSearch([self.model.searchInfo.get("baseSearchString")].concat(getClusteringFitArray()),self.model.searchInfo.get("baseTimerange"));window.open(DrilldownLinker.getUrl("search",search),"_blank")}),self.assistantFormView.footer.controls.showSPLButton.on("click",function(){(0,_SearchStringDisplay.showSearchStringModal)("clusterTrainingSearchStringDisplayModal","Fit a clustering model on all your data in search",[self.model.searchInfo.get("baseSearchString")].concat(getClusteringFitArray()),[null].concat(getClusteringFitCommentsArray()),self.model.searchInfo.get("baseTimerange"))}),self.assistantFormView.footer.controls.scheduleButton.on("click",function(){var baseTimerange=self.model.searchInfo.get("baseTimerange"),scheduledSearchModal=new _Master4["default"]({searchString:Forms.parseTemplate(self.model.searchInfo.get("baseSearchString")+" "+getClusteringFitArray().join("")),earliestTIme:baseTimerange.earliest_time,latestTime:baseTimerange.latest_time});scheduledSearchModal.render().appendTo((0,_jquery2["default"])("body")).show()}),Searches.setSearch("clusteringSearch",{autostart:!1,targetJobIdTokenName:"clusteringSearchJobIdToken",searchString:"| loadjob $searchBarSearchJobIdToken$ $preprocessFitSPLToken$ "+clusteringFitSPL,onStartCallback:function(){self.hideResults(),self.hideErrorMessage(),updateForm(!0,"Clustering...")},onErrorCallback:function(errorMessage){self.showErrorMessage(errorMessage),self.hideResults()},onDoneCallback:function(){var searchAttributes=Searches.getSearchManager("searchBarSearch").search.attributes;historySerializer.persist(Searches.getSid(this),{_time:parseInt((new Date).valueOf()/1e3,10),search_query:searchAttributes.search,earliest_time:searchAttributes.earliest_time,latest_time:searchAttributes.latest_time,preprocess_query:self.assistantFormView.preprocessPanel.getSerializedList(),algorithm:algorithmControl.val(),cluster_variable:clusterVariableControl.val(),algorithm_params:getAlgorithmParamsList(),cluster_model_name:Forms.getToken("modelNameToken")}),self.showResults(),clusteringPanel.visualizeVariableControl.val(clusterVariableControl.val()),clusteringPanel.visualizeSubmitControl.trigger("submit")},onFinallyCallback:function(){updateForm(!1)}})}(),function(){Searches.setSearch("variableSearch",{searchString:(0,_compactTemplateString2["default"])(_templateObject2,self.assistantFormView.preprocessSearchJobIdTokenName),onStartCallback:function(){self.hideErrorMessage()},onErrorCallback:function(errorMessage){self.showErrorMessage(errorMessage),self.hideResults()}})}(),function(){var vizQueryArray=[],vizQuerySearch=null;clusteringPanel.openInSearchButton.on("click",function(){window.open(DrilldownLinker.getUrl("search",vizQuerySearch,vizOptions),"_blank")}),clusteringPanel.showSPLButton.on("click",function(){(0,_SearchStringDisplay.showSearchStringModal)("clusteringSearchStringDisplayModal","Display the cluster in search",vizQueryArray,[null].concat(canSaveModel()?getClusteringApplyCommentsArray():getClusteringFitCommentsArray(),"display the selected variables"),self.model.searchInfo.get("baseTimerange"),vizOptions)}),clusteringPanel.scheduleAlertButton.on("click",function(){Searches.getSearchResults("clusteringSearch").once("data",function(searchResults,data){var clusterIndex=data.fields.indexOf("cluster");if(clusterIndex>-1){var clusters=_underscoreMltk2["default"].uniq(data.rows.map(function(row){return row[clusterIndex]})).filter(function(v){return null!=v});new _ClusteringAlertModal2["default"]({clusters:clusters,baseSearchString:Forms.parseTemplate(self.model.searchInfo.get("baseSearchString")+" "+getClusteringApplyArray().join(" ")),modelName:Forms.getToken("modelNameToken")}).render().appendTo((0,_jquery2["default"])("body")).show()}})}),Searches.setSearch("visualizeSearch",{autostart:!1,searchString:"| loadjob $clusteringSearchJobIdToken$ $visualizeVariableToken$",onStartCallback:function(){self.hideErrorMessage();var clusteringSPLArray=canSaveModel()?getClusteringApplyArray():getClusteringFitArray();vizQueryArray=[self.model.searchInfo.get("baseSearchString")].concat(clusteringSPLArray,Forms.getToken("visualizeVariableToken")),vizQuerySearch=DrilldownLinker.createSearch(vizQueryArray,self.model.searchInfo.get("baseTimerange")),DrilldownLinker.setSearchDrilldown(clusteringPanel.title,vizQuerySearch,vizOptions)},onErrorCallback:function(errorMessage){self.showErrorMessage(errorMessage)}})}(),this.sampleSearchDeferred.done(loadSavedPreprocessedSearch),setTimeout(updateForm,0),this},controlsTemplate:'\n        <div class="mlts-input">\n            <label>Algorithm</label>\n            <div id="algorithmControl"></div>\n        </div>\n        <div class="mlts-input">\n            <label>Fields to use for clustering</label>\n            <div id="clusterVariableControl"></div>\n        </div>\n        <span id="algorithmParamsControlsWrapper"></span>\n        <div class="mlts-input">\n            <label>Save the model as</label>\n            <div id="modelNameInputControl"></div>\n        </div>\n     ',template:'\n        <div class="mlts-row mlts-results-row">\n            <div class="mlts-cell">\n                <div class="mlts-panel" id="clusteringPanel"></div>\n            </div>\n        </div>\n    '}),clusteringView=new ClusteringView;clusteringView.deferreds.viewReady.done(function(layout){layout.getContainerElement().appendChild(clusteringView.render().el)})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"splunkjs/mvc/simpleform/input/submit":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_RESULT__=function(require){var _=__webpack_require__("require/underscore"),$=__webpack_require__("shim/jquery"),BaseSplunkView=__webpack_require__("splunkjs/mvc/basesplunkview"),Dashboard=__webpack_require__("splunkjs/mvc/simplexml/controller"),FormUtils=__webpack_require__("splunkjs/mvc/simpleform/formutils"),SubmitButton=BaseSplunkView.extend({className:"splunk-submit-button form-submit",options:{text:_("Submit").t(),useIcon:!1},events:{"click button":function(e){e.preventDefault(),this.$("button").is(".disabled")||this.trigger("submit",this)},"click .delete-input":function(e){e.preventDefault(),Dashboard.model.view.updateFormSettings({submitButton:!1}).done(_.bind(this.remove,this))}},initialize:function(){this.configure(),this.listenTo(this.settings,"change",this.render),this.listenTo(Dashboard.getStateModel(),"change:edit",this.onEditModeChange);var settings=this.settings;settings.set("formReady",FormUtils.isFormReady()),_.defer(function(){FormUtils.onFormReady().then(function(){settings.set("formReady",!0)})}),this.listenTo(settings,"change",this.render)},onEditModeChange:function(){if(this.$(".edit-dropdown").remove(),Dashboard.isEditMode()){var el=$('<div class="edit-dropdown"><a href="#" class="delete-input"><i class="icon-x"/></a></div>');el.find(".delete-input").attr("title",_("Delete submit button").t()),el.prependTo(this.el)}},render:function(){var button=this.$("button");return button.length||(button=$('<button class="btn btn-primary"></button>').appendTo(this.el)),this.settings.get("useIcon")?button.html('<i class="icon-search"></i>'):this.settings.has("text")?button.text(this.settings.get("text")):this.settings.set("text",button.text()),button[this.settings.get("formReady")?"removeClass":"addClass"]("disabled"),this.onEditModeChange(),this}});return SubmitButton}.call(exports,__webpack_require__,exports,module),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},289:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[module,exports,__webpack_require__("shim/jquery"),__webpack_require__(48),__webpack_require__("splunkjs/mvc/dropdownview"),__webpack_require__("splunkjs/mvc/textinputview"),__webpack_require__(237),__webpack_require__(242),__webpack_require__(246),__webpack_require__(247),__webpack_require__(235),__webpack_require__("views/shared/Modal")],__WEBPACK_AMD_DEFINE_RESULT__=function(module,exports,_jquery,_underscoreMltk,_dropdownview,_textinputview,_Messages,_compactTemplateString,_NumberValidator,_AlertModal,_Forms,_Modal){"use strict";function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj["default"]=obj,newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=_interopRequireDefault(_jquery),_underscoreMltk2=_interopRequireDefault(_underscoreMltk),_dropdownview2=_interopRequireDefault(_dropdownview),_textinputview2=_interopRequireDefault(_textinputview),Messages=_interopRequireWildcard(_Messages),_compactTemplateString2=_interopRequireDefault(_compactTemplateString),NumberValidator=_interopRequireWildcard(_NumberValidator),_AlertModal2=_interopRequireDefault(_AlertModal),Forms=_interopRequireWildcard(_Forms),_Modal2=_interopRequireDefault(_Modal),_templateObject=_taggedTemplateLiteral(["| stats count by cluster | where count "," ","\n                                               "," count "," ",""],["| stats count by cluster | where count "," ","\n                                               "," count "," ",""]);exports["default"]=_Modal2["default"].extend({className:_Modal2["default"].CLASS_NAME+" "+_Modal2["default"].CLASS_MODAL_WIDE,initialize:function(options){
this.options=_underscoreMltk2["default"].extend({onHiddenRemove:!0},this.options),_Modal2["default"].prototype.initialize.apply(this,arguments)},events:_jquery2["default"].extend({},_Modal2["default"].prototype.events,{"click .btn-primary":function(e){var _this=this;e.preventDefault();var button=(0,_jquery2["default"])(e.target);this.removeAlert();var validationOptions={allowFloats:!1,min:0},valueRange=this.controls.comparison.val(),customSearch="",firstValue=this.controls.firstValue.val(),isValid=NumberValidator.validate(firstValue,validationOptions);if(Messages.setFormInputStatus(this.controls.firstValue,isValid),">"===valueRange||"<"===valueRange)customSearch="| stats count by cluster | where count "+valueRange+" "+firstValue;else if("> AND <"===valueRange||"< OR >"===valueRange){var secondValue=this.controls.secondValue.val(),secondValueValid=NumberValidator.validate(secondValue,validationOptions);Messages.setFormInputStatus(this.controls.secondValue,secondValueValid),isValid=isValid&&secondValueValid;var splitComparison=valueRange.split(" ");customSearch=(0,_compactTemplateString2["default"])(_templateObject,splitComparison[0],Math.min(firstValue,secondValue),splitComparison[1],splitComparison[2],Math.max(firstValue,secondValue))}if(isValid&&customSearch.length>0){var searchString=[this.options.baseSearchString,"| where cluster == "+Forms.escape(this.controls.cluster.val())].join(" "),submitButtonText=button.text();button.attr("disabled",!0).text("Loading..."),new _AlertModal2["default"]({searchString:searchString}).done(function(alertModal){_this.shown?(_this.hide(),alertModal.model.alert.entry.content.set("ui.scheduled.triggercondition","custom"),alertModal.model.alert.entry.content.set("ui.scheduled.customsearch",customSearch),alertModal.render().appendTo((0,_jquery2["default"])("body")).show()):alertModal.remove()}).fail(function(message){_this.setAlert(message),button.attr("disabled",!1).text(submitButtonText)})}else this.setAlert("Alert threshold must be a positive integer.")},hide:function(){var _this2=this;Object.keys(this.controls).forEach(function(id){return _this2.controls[id].remove()})}}),render:function(){var _this3=this,self=this;return this.$el.addClass("clustering-alert-modal"),this.$el.html(_Modal2["default"].TEMPLATE),this.$(_Modal2["default"].HEADER_TITLE_SELECTOR).text("Schedule an alert"),this.alertWrapper=(0,_jquery2["default"])('<div class="mlts-modal-alert">'),this.$(_Modal2["default"].BODY_SELECTOR).prepend(this.alertWrapper),this.$(_Modal2["default"].BODY_SELECTOR).append(_Modal2["default"].FORM_HORIZONTAL),this.$(_Modal2["default"].BODY_FORM_SELECTOR).append('\n            <p>Alert me when the number of events in cluster</p>\n            <span class="clustering-alert-modal-cluster-control"></span>\n            <p>is</p>\n            <span class="clustering-alert-modal-comparison-control"></span>\n            <span class="clustering-alert-modal-first-value-control"></span>\n            <p>and</p>\n            <span class="clustering-alert-modal-second-value-control"></span>\n        ').addClass("mlts-modal-form-inline"),this.controls={cluster:new _dropdownview2["default"]({id:"clusterSelectionControl",el:this.$el.find(".clustering-alert-modal-cluster-control"),choices:this.options.clusters.map(function(cluster){return{value:cluster}}),labelField:"value",valueField:"value",showClearButton:!1,selectFirstChoice:!0}),comparison:new _dropdownview2["default"]({id:"valueRangeDropdownControl",el:this.$el.find(".clustering-alert-modal-comparison-control"),choices:[{label:"greater than",value:">"},{label:"less than",value:"<"},{label:"between",value:"> AND <"},{label:"not between",value:"< OR >"}],selectFirstChoice:!0,showClearButton:!1}),firstValue:new _textinputview2["default"]({id:"firstValueControl",el:this.$el.find(".clustering-alert-modal-first-value-control"),value:0}),secondValue:new _textinputview2["default"]({id:"secondValueControl",el:this.$el.find(".clustering-alert-modal-second-value-control"),value:0})},this.controls.comparison.on("change",function(value){var action=">"===value||"<"===value?"hide":"show";self.controls.firstValue.$el.next()[action](),self.controls.secondValue.$el[action]()}),Object.keys(this.controls).forEach(function(id){return _this3.controls[id].render()}),this.$(_Modal2["default"].FOOTER_SELECTOR).append(_Modal2["default"].BUTTON_CANCEL),this.$(_Modal2["default"].FOOTER_SELECTOR).append(_Modal2["default"].BUTTON_NEXT),this},setAlert:function(alertMessage,alertType){Messages.setAlert(this.alertWrapper,alertMessage,alertType,void 0,!0)},removeAlert:function(){Messages.removeAlert(this.alertWrapper,!0)}}),module.exports=exports["default"]}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}});