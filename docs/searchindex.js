Search.setIndex({docnames:["async.asyncio_engine","async.base_engine","async.base_protocol","async.gevent_engine","calling_python","configuration","cookbook","data_types","dist.base_dist_protocol","dist.distribution","dist.epmd","dist.in_dist_protocol","dist.node_opts","dist.out_dist_protocol","examples","gen","gen_server","index","net_kernel","node","process","pyrlang.notebook","pyrlang.util","rex"],envversion:53,filenames:["async.asyncio_engine.rst","async.base_engine.rst","async.base_protocol.rst","async.gevent_engine.rst","calling_python.rst","configuration.rst","cookbook.rst","data_types.rst","dist.base_dist_protocol.rst","dist.distribution.rst","dist.epmd.rst","dist.in_dist_protocol.rst","dist.node_opts.rst","dist.out_dist_protocol.rst","examples.rst","gen.rst","gen_server.rst","index.rst","net_kernel.rst","node.rst","process.rst","pyrlang.notebook.rst","pyrlang.util.rst","rex.rst"],objects:{"pyrlang.async":{asyncio_engine:[0,0,0,"-"],base_engine:[1,0,0,"-"],base_protocol:[2,0,0,"-"],gevent_engine:[3,0,0,"-"]},"pyrlang.async.asyncio_engine":{AsyncioEngine:[0,1,1,""],AsyncioQueue:[0,1,1,""]},"pyrlang.async.asyncio_engine.AsyncioEngine":{call_later:[0,2,1,""],connect_with:[0,2,1,""],destroy:[0,2,1,""],listen_with:[0,2,1,""],queue_new:[0,2,1,""],run_forever:[0,2,1,""],sleep:[0,2,1,""],socket_module:[0,2,1,""],spawn:[0,2,1,""]},"pyrlang.async.asyncio_engine.AsyncioQueue":{get:[0,2,1,""],is_empty:[0,2,1,""],put:[0,2,1,""]},"pyrlang.async.base_engine":{BaseEngine:[1,1,1,""],BaseQueue:[1,1,1,""]},"pyrlang.async.base_engine.BaseEngine":{call_later:[1,2,1,""],connect_with:[1,2,1,""],destroy:[1,2,1,""],listen_with:[1,2,1,""],queue_new:[1,2,1,""],run_forever:[1,2,1,""],sleep:[1,2,1,""],socket_module:[1,2,1,""],spawn:[1,2,1,""]},"pyrlang.async.base_engine.BaseQueue":{get:[1,2,1,""],is_empty:[1,2,1,""],put:[1,2,1,""]},"pyrlang.async.base_protocol":{BaseProtocol:[2,1,1,""]},"pyrlang.async.base_protocol.BaseProtocol":{close_requested_:[2,3,1,""],destroy:[2,2,1,""],on_connected:[2,2,1,""],on_connection_lost:[2,2,1,""],on_incoming_data:[2,2,1,""],periodic_check:[2,2,1,""],send:[2,2,1,""],send_buffer_:[2,3,1,""]},"pyrlang.async.gevent_engine":{GeventEngine:[3,1,1,""],GeventQueue:[3,1,1,""],make_serve_loop:[3,4,1,""]},"pyrlang.async.gevent_engine.GeventEngine":{call_later:[3,2,1,""],connect_with:[3,2,1,""],destroy:[3,2,1,""],listen_with:[3,2,1,""],queue_new:[3,2,1,""],run_forever:[3,2,1,""],sleep:[3,2,1,""],socket_module:[3,2,1,""],spawn:[3,2,1,""]},"pyrlang.async.gevent_engine.GeventQueue":{get:[3,2,1,""],is_empty:[3,2,1,""],put:[3,2,1,""]},"pyrlang.dist":{base_dist_protocol:[8,0,0,"-"],distribution:[9,0,0,"-"],epmd:[10,0,0,"-"],in_dist_protocol:[11,0,0,"-"],node_opts:[12,0,0,"-"],out_dist_protocol:[13,0,0,"-"]},"pyrlang.dist.base_dist_protocol":{BaseDistProtocol:[8,1,1,""],DistributionError:[8,6,1,""]},"pyrlang.dist.base_dist_protocol.BaseDistProtocol":{ALIVE:[8,3,1,""],CONNECTED:[8,3,1,""],DISCONNECTED:[8,3,1,""],RECV_CHALLENGE:[8,3,1,""],RECV_CHALLENGE_ACK:[8,3,1,""],RECV_NAME:[8,3,1,""],RECV_STATUS:[8,3,1,""],WAIT_CHALLENGE_REPLY:[8,3,1,""],check_digest:[8,5,1,""],engine_:[8,3,1,""],inbox_:[8,3,1,""],make_digest:[8,5,1,""],node_name_:[8,3,1,""],on_connected:[8,2,1,""],on_connection_lost:[8,2,1,""],on_incoming_data:[8,2,1,""],on_packet:[8,2,1,""],on_packet_connected:[8,2,1,""],on_passthrough_message:[8,2,1,""],packet_len_size_:[8,3,1,""],peer_distr_version_:[8,3,1,""],periodic_check:[8,2,1,""],protocol_error:[8,2,1,""],report_dist_connected:[8,2,1,""],state_:[8,3,1,""]},"pyrlang.dist.distribution":{ErlangDistribution:[9,1,1,""]},"pyrlang.dist.distribution.ErlangDistribution":{connect:[9,2,1,""],connect_to_node:[9,2,1,""],creation_:[9,3,1,""],destroy:[9,2,1,""],disconnect:[9,2,1,""],engine_:[9,3,1,""],node_name_:[9,3,1,""]},"pyrlang.dist.epmd":{EPMDClient:[10,1,1,""]},"pyrlang.dist.epmd.EPMDClient":{alive2:[10,2,1,""],close:[10,2,1,""],connect:[10,2,1,""],engine_:[10,3,1,""],host_:[10,3,1,""],query_node:[10,2,1,""]},"pyrlang.dist.in_dist_protocol":{InDistProtocol:[11,1,1,""]},"pyrlang.dist.in_dist_protocol.InDistProtocol":{on_connection_lost:[11,2,1,""],on_packet:[11,2,1,""],on_packet_challengereply:[11,2,1,""],on_packet_recvname:[11,2,1,""]},"pyrlang.dist.node_opts":{DEFAULT_DFLAGS:[12,7,1,""],DFLAG_BIT_BINARIES:[12,7,1,""],DFLAG_DIST_MONITOR:[12,7,1,""],DFLAG_DIST_MONITOR_NAME:[12,7,1,""],DFLAG_EXT_PIDS_PORTS:[12,7,1,""],DFLAG_EXT_REFS:[12,7,1,""],DFLAG_MAP_TAG:[12,7,1,""],DFLAG_NEW_FLOATS:[12,7,1,""],NodeOpts:[12,1,1,""]},"pyrlang.dist.out_dist_protocol":{OutDistProtocol:[13,1,1,""]},"pyrlang.dist.out_dist_protocol.OutDistProtocol":{on_connected:[13,2,1,""],on_packet:[13,2,1,""],on_packet_alive:[13,2,1,""],on_packet_recvchallenge:[13,2,1,""],on_packet_recvchallenge_ack:[13,2,1,""],on_packet_recvstatus:[13,2,1,""]},"pyrlang.gen":{GenIncomingCall:[15,1,1,""],GenIncomingMessage:[15,1,1,""],parse_gen_call:[15,4,1,""],parse_gen_message:[15,4,1,""]},"pyrlang.gen.GenIncomingCall":{args_:[15,3,1,""],fun_:[15,3,1,""],group_leader_:[15,3,1,""],mod_:[15,3,1,""]},"pyrlang.gen.GenIncomingMessage":{message_:[15,3,1,""]},"pyrlang.gen_server":{GenException:[16,6,1,""],GenServer:[16,1,1,""]},"pyrlang.gen_server.GenServer":{gen_accepted_calls_:[16,3,1,""],handle_info:[16,5,1,""],handle_one_inbox_message:[16,2,1,""]},"pyrlang.net_kernel":{NetKernel:[18,1,1,""]},"pyrlang.net_kernel.NetKernel":{is_auth:[18,5,1,""]},"pyrlang.node":{Node:[19,1,1,""],NodeException:[19,6,1,""],ProcessNotFoundError:[19,6,1,""]},"pyrlang.node.Node":{all_nodes:[19,3,1,""],demonitor_process:[19,2,1,""],destroy:[19,2,1,""],dist_command:[19,2,1,""],get_cookie:[19,2,1,""],handle_inbox:[19,2,1,""],handle_one_inbox_message:[19,2,1,""],inbox_:[19,3,1,""],monitor_process:[19,2,1,""],on_exit_process:[19,2,1,""],pid_counter_:[19,3,1,""],register_name:[19,2,1,""],register_new_process:[19,2,1,""],send:[19,2,1,""],where_is:[19,2,1,""]},"pyrlang.notebook":{notebook:[21,0,0,"-"]},"pyrlang.notebook.notebook":{Notebook:[21,1,1,""],new_context:[21,4,1,""]},"pyrlang.notebook.notebook.Notebook":{history_:[21,3,1,""],history_ids_:[21,3,1,""],history_limit_:[21,3,1,""],nb_batch:[21,2,1,""],nb_call:[21,2,1,""],nb_retrieve:[21,2,1,""],value_id_:[21,3,1,""]},"pyrlang.process":{Process:[20,1,1,""]},"pyrlang.process.Process":{deliver_message:[20,2,1,""],engine_:[20,3,1,""],exit:[20,2,1,""],handle_inbox:[20,2,1,""],handle_one_inbox_message:[20,2,1,""],inbox_:[20,3,1,""],monitor_targets_:[20,3,1,""],monitors_:[20,3,1,""],node_name_:[20,3,1,""],passive_:[20,3,1,""],pid_:[20,3,1,""],process_loop:[20,2,1,""]},"pyrlang.rex":{Rex:[23,1,1,""]},"pyrlang.rex.Rex":{handle_one_inbox_message:[23,2,1,""],traceback_depth_:[23,3,1,""]},"pyrlang.util":{as_str:[22,4,1,""],start_pyrlang:[22,4,1,""]},pyrlang:{gen:[15,0,0,"-"],gen_server:[16,0,0,"-"],net_kernel:[18,0,0,"-"],node:[19,0,0,"-"],process:[20,0,0,"-"],rex:[23,0,0,"-"],util:[22,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"],"6":["py","exception","Python exception"],"7":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:staticmethod","6":"py:exception","7":"py:data"},terms:{"1st":14,"2nd":14,"abstract":[1,2,8],"byte":[2,6,7,8,12,22],"case":[6,7],"class":[0,1,2,3,4,6,7,8,9,10,11,12,13,15,16,18,19,20,21,23],"default":[4,5,12,20,23],"final":6,"float":[0,1,3,7],"function":[0,1,3,4,6,7,9,15,16,20,21,22,23],"import":[4,6,15,19,21,22],"int":[3,4,6,7,8,10,12],"long":10,"new":[0,1,3,6,11,19,20,21],"return":[0,1,2,3,4,6,7,8,9,10,15,16,19,20,21,23],"static":[8,16,18],"throw":10,"true":[2,4,5,10,20,21],"try":[2,6,9,14],"while":[0,1,3,6,21],And:14,But:6,For:[4,5,6,15],Not:7,The:[2,6,10,11,12,13,15,17,19,23],There:[4,6],These:4,Use:7,Used:1,Will:4,__init__:[6,16],__main__:6,__name__:6,__sub__:4,_arg:2,_kwarg:2,_loop:20,_r4:4,_run:[19,20],_sender:6,_socket3:3,_tail:7,a_cal:1,abil:16,abl:[6,7],about:[10,14],abov:4,accept:[3,8,14,23],accepted_cal:[6,16],access:[7,19],accumul:2,activ:14,actual:4,adapt:[0,2,3,6,9,19],add:19,adding:4,addit:6,address:17,after:[1,11,13],afterward:8,again:4,against:8,aliv:8,alive2:10,all:[4,5,6,9,16,19],all_nod:[19,20],allow:[1,4,6,16],also:[6,17,21],alwai:[7,10],amount:[1,4],ani:[4,7,19,20,21],anoth:[4,11,13,19],anyth:[7,19],api:6,append:4,applic:10,arg:[0,3,4,6,8,15,16,19,21],args_:15,argument:[0,3,6,15,21,22],arrai:7,arriv:[6,19,20],as_str:22,ascii:[4,7,15,22],ask:8,aspect:1,assist:15,assum:7,async:[8,9,10,11,13,17,19,20],asynchron:[6,19],asyncio:[0,1,2,6,9,10],asyncio_engin:[5,17],asyncioengin:[0,6,9],asyncioqueu:0,atom:[4,6,7,15,16,19,20,21,22,23],attach:23,attempt:[0,2,3,14,21,23],autocomplet:14,automat:[6,19,21],avail:[9,10],avoid:9,awai:1,back:[4,6,7,15,23],base:[0,1,2,3,6,8,9,10,11,12,13,15,16,17,18,19,20,21,23],base_dist_protocol:[11,13,17],base_engin:[0,3,8,9,10,11,13,17,19],base_protocol:[0,1,3,8,17],basedistprotocol:[8,11,13],baseengin:[0,1,3,8,9,10,11,13,19],basenod:[16,19,20],baseprocess:20,baseprotocol:[0,1,2,3,8],basequeu:[0,1,3],bash:14,basic:3,batch1:4,batch:[17,21],batch_cal:4,batch_new:4,batch_run:4,becaus:[4,6,21],becom:6,been:[8,10,11,13],befor:[0,3,8],begin:[4,17],being:[7,20,23],below:6,between:[6,7],binari:[4,6,12,15,16,17],bit:[7,12],bitstr:7,block:9,bool:[4,8,9,10,11,13,20],both:6,box:19,built:21,calcul:[4,17,21],call:[0,1,3,7,8,9,17,19,20,21,23],call_lat:[0,1,3],callabl:21,caller:[6,15,19,21,23],can:[4,6,7,10,12,14,15,17,20,21],caus:20,cell:7,chain:6,challeng:8,chang:17,cheap:14,check:[2,5,6,7,14,19,22],check_digest:8,classnam:7,client:[8,10,14],close:[2,10,19],close_requested_:2,cluster:17,code:[5,6,14,17],collect:[2,19,20],combin:12,come:[6,15],command:[11,19],compat:[0,1,3,17],con:7,concept:17,configur:[17,22],confus:7,conn:8,connect:[0,1,2,3,4,8,9,10,11,13,14,17,19],connect_to_nod:9,connect_with:[0,1,3],consid:15,constantli:6,construct:[15,20],constructor:[0,3,6],consum:[0,2,3],contain:[4,7,15,16,21],content:17,context:[4,21],continu:[1,20],control:8,control_term:8,conveni:[14,20],convert:[7,16],cookbook:[14,17],cooki:[0,3,4,6,8,12,14,19],correspond:2,could:6,counter:19,cpu:[19,20],craft:19,creat:[0,1,2,3,4,6,9,15,17,19,20,21],create_connect:1,creation:[9,21],creation_:9,critic:5,ctx:4,current:[1,12,15],custom:5,cycl:[8,9],daemon:[9,10],data:[0,2,3,4,6,8,11,13,14,17],date:5,datetim:4,death:20,debug:5,decod:[12,17],def:[6,16],default_dflag:12,defin:[2,6,7,8,21],delet:21,deliv:[6,19,20,23],deliver_messag:20,demand:2,demonitor_process:19,demonstr:14,depth:23,descend:6,describ:6,design:17,destroi:[0,1,2,3,4,9,19,20],detect:20,determin:15,dflag:12,dflag_bit_binari:12,dflag_dist_monitor:12,dflag_dist_monitor_nam:12,dflag_ext_pids_port:12,dflag_ext_ref:12,dflag_map_tag:12,dflag_new_float:12,dict:[0,1,3,4,7,21],dictionari:[6,19,20],diff:4,differ:[1,4,6],digest:8,direct:6,directli:7,directori:14,disconn:8,disconnect:[8,9],discov:9,dist:17,dist_command:19,distribut:[8,10,11,13,19],distributionerror:8,doc:15,document:[22,23],doe:19,don:9,done:[4,6,15],doubl:[7,12],down:8,driven:6,driver:[0,3],drop:[4,17],dt1:4,dt2:4,due:2,each:[10,21],easi:[6,7],either:[6,9,20],element:[4,6,7,15,16,23],elixir:17,els:[0,1,3],empti:[4,20],enabl:[5,23],encod:[12,17],end:4,endless:20,enforc:19,eng:6,engin:[0,1,2,3,6,8,9,10,11,13,19,20],engine_:[8,9,10,20],enter:4,env:5,environ:22,epmd:[9,11,13,17,19],epmdclient:10,epmdclienterror:10,epmdconnectionerror:10,erl:[4,6,14,21],erlang:[7,8,9,10,15,16,17,19,20,21,23],erlangdistribut:[9,10],error:[1,5,6,15],establish:[6,8,10],etc:2,even:6,event:[1,6,10,20],event_engin:6,exampl:[6,16,17,19],example10a:14,example10b:14,example1:14,example2:14,example3:14,example4:14,except:[1,4,6,8,16,19,21,22,23],exceptionclassnam:4,execut:[4,6,14,17,20,21],executor:23,exist:[6,17,19],exit:[6,20],exiting_pid:19,expect:23,explicitli:6,explor:17,expos:6,extend:9,extens:4,extern:[2,12],extra:[6,20],extract:[7,22],fail:[7,9],fake:[6,19],fake_pid:6,fals:[0,1,3,4,10,20],familiar:17,featur:12,feed:[0,3],fetch:[0,3],few:17,fgsfd:20,field:[6,20,23],file:[5,14],find:[4,10,14,19,21],finish:[8,9],first:[2,4,6,11,16,19,21,23],flag:[4,12],flow:21,flush:[6,14],follow:[2,4,6,15],forev:1,form:8,format:[5,6,23],forth:4,from:[0,2,3,7,8,9,10,11,13,14,15,16,17,20,21,22],fsm:8,fulli:2,fun:[7,15],fun_:15,gain:16,garbag:20,gen:[17,23],gen_accepted_calls_:16,gen_cal:[15,23],gen_serv:[14,15,17,18,21],genbas:15,gener:[9,17,19],genexcept:16,genincomingcal:15,genincomingmessag:15,genserv:[6,15,16,17,18,21],get:[0,1,3,14,17,19,20],get_cooki:19,get_typ:4,gethostbynam:1,gevent:[0,1,2,3,6,9,10,19,20],gevent_engin:17,geventengin:[3,6,9,19],geventqueu:3,give:[6,9,19],given:[1,4,10,19,22,23],got:6,greater:21,greenlet:[6,9],group:15,group_lead:15,group_leader_:15,had:[11,13],handl:[1,4,6,8,11,12,13,15,17,18,19,20],handle_inbox:[6,19,20],handle_info:16,handle_one_inbox_messag:[6,16,19,20,23],handler:[0,1,2,3,8,9,16,19,20],handshak:8,happen:19,has:[0,3,6,7,8,10,19],hash:8,have:[6,7,9,14,20],header:[8,11,13],hello:[6,10,14,16],help:[10,11,13],helper:[0,3,4,6,7,9,15],here:[4,6,17,21],histor:21,histori:[4,6,21],history_:21,history_ids_:21,history_limit_:21,hold:12,hopefulli:15,host:[0,3,10],host_:10,host_port:[0,1,2,3,8,13],hostnam:10,how:[14,16,17],ident:19,identifi:[16,17,20],ids:[19,21],ieee:12,immedi:[4,20,21],implement:[4,6,9,10,11,13,19,20,21],improp:7,improper_list:7,improperlist:7,in_dist_protocol:17,inbox:[8,19,20],inbox_:[6,8,19,20],incom:[6,7,8,11,13,14,15,16,19,20],incomplet:[2,7,12],index:[6,17,19,21],indistprotocol:11,infinit:19,info:5,inform:20,inherit:[6,15,16],initi:[6,9,10,11,13],input:[4,10,15],instead:[4,16,20,21],integ:[4,7,12,21],interact:20,intermedi:6,intern:19,interpret:22,introduc:6,invis:7,invok:[8,22],is_auth:[15,18],is_empti:[0,1,3],item:[0,3,4],its:[4,6,7,16,19,20,21],itself:[6,18,19,20,23],job:4,just:[6,14],kei:4,keyword:[0,3],kind:7,known:4,kwarg:[4,8,16,19,21],last:[7,15],last_byte_bit:7,later:8,latin:[7,22],lazi:17,lazili:6,leader:15,length:21,level:[5,15],librari:[1,4,12],life:4,lifetim:20,like:[0,3,5,10,14,15,17],limit:[4,21],line:5,link:[17,20],list:[0,1,3,4,6,9,10,15,16,17,21],listen:[1,5],listen_with:[0,1,3],local:[10,17,19,20],local_nod:9,locat:[5,10,14,19],log:[5,6,14,21],logger:[5,6],logic:[16,20],look:[5,6,9,14,15,19],loop:[1,6,8,19,20],loop_fn:[0,1,3],low:15,machin:[8,10],made:9,mai:[7,19],mailbox:19,main:6,make:14,make_digest:8,make_handler_in:8,make_serve_loop:3,makefil:14,manag:19,map:[4,6,7,12],mark:20,match:8,mayb:2,memori:21,messag:[5,6,8,14,15,16,17,18,19,20,23],message_:15,method:[6,16,19,20],might:[4,6,15],mod:15,mod_:15,modifi:[1,19],modul:[4,6],monitor:[12,17,19,20],monitor_process:19,monitor_targets_:20,monitors_:[19,20],more:[6,19],mostli:6,msg:[2,6,8,15,16,19,20,23],msg_term:8,multipl:4,must:[16,19],my_erlang_process:6,my_method:6,my_process:[6,14],myclass:6,myprocess:[6,16],name:[0,3,4,5,6,9,10,12,14,15,17,19,20,21,23],nb_batch:21,nb_call:21,nb_retriev:21,necessari:6,need:[4,6,8,15,19,20],net_adm:[6,18],net_kernel:17,netkernel:18,network:[9,12,19],new_context:[4,21],newli:9,next:21,nice:[1,17],nil:7,node:[0,3,4,7,8,9,10,11,12,13,14,15,16,17,18,20,21,23],node_nam:[6,8,9,11,13,15,19,21],node_name_:[8,9,20],node_opt:17,nodeexcept:19,nodeopt:12,non:[6,23],none:[0,2,3,6,8,9,10,12,15,16,18,19,20,21,23],nonetyp:[2,8,16,19],note:[4,7],notebook:[6,14,17],noth:2,notif:19,notset:5,now:[4,6,19],object:[1,2,4,7,8,9,10,12,15,17,19,20],observ:14,offer:8,often:6,older:8,on_connect:[0,2,3,8,13],on_connection_lost:[0,2,3,8,11],on_exit_process:19,on_incoming_data:[2,8],on_packet:[8,11,13],on_packet_al:13,on_packet_challengerepli:11,on_packet_connect:8,on_packet_recvchalleng:13,on_packet_recvchallenge_ack:13,on_packet_recvnam:11,on_packet_recvstatu:13,on_passthrough_messag:8,one:[0,3,5,6,18,20,21],onli:[7,11,19,20],open:6,oper:[6,9],optim:7,option:[4,6,14,20,21],order:21,ordinari:4,origin:19,other:[7,9,10,11,13,19],otherwis:[15,20],otp:[8,10,16,17],our:[8,13],ourselv:10,out_dist_protocol:17,outdistprotocol:13,outgo:[2,13,19],outliv:19,over:[6,19],overrid:[2,4,5,20,23],own:19,packet:[2,8,11,13],packet_len_size_:8,page:[6,17],pair:[4,7],parallel:6,param:21,paramet:[0,2,3,6,9,10,11,13,15,19,21,23],pars:[15,16,23],parse_gen_cal:[15,23],parse_gen_messag:15,parser:16,part:[2,9,10,14,15],partial:2,pass:[0,3,6,23],passiv:20,passive_:20,path:[4,21],payload:15,peer:8,peer_distr_version_:8,per:19,perform:[4,6,11,14,21],period:[2,19],periodic_check:[2,8],pick:19,pid:[6,7,9,12,15,19,21],pid_:[6,16,20],pid_counter_:19,ping:[6,18],place:[19,20],pleas:[6,15,19],plug:2,pluggabl:[1,6,10,20],point:7,poll:20,port:[0,1,3,10,12],possibl:[6,19],prebuild:6,precis:7,prepar:4,prepend:21,prevent:20,previou:4,previous:19,print:[6,14],printabl:7,problem:6,proc:19,process:[4,12,14,15,16,17,18,19,23],process_loop:20,processnotfound:19,processnotfounderror:19,produc:8,project:4,propag:21,protocol:[0,2,3,6,8,9,10,11],protocol_arg:[0,1,3],protocol_class:[0,1,3],protocol_error:8,protocol_kwarg:[0,1,3],purpos:5,put:[0,1,3],pynod:14,pyrlang:[0,1,2,3,4,6,8,9,10,11,12,13,15,16,18,19,20,22,23],pyrlang_enable_log_format:5,pyrlang_log_level:5,python:[7,16,17,21],queri:[9,10],query_nod:10,queue:[0,1,3,6,19,20],queue_new:[0,1,3],quick:6,r6b:8,rais:[8,19,22],random:1,rang:[7,8],rather:9,readi:[6,21],reason:[6,19,20],receiv:[3,4,6,7,14,16,17,19,20],receiver_nod:19,receiver_pid:6,recent:21,recogn:16,recv:8,recv_challeng:8,recv_challenge_ack:8,recv_nam:[8,11],recv_statu:8,recvnam:8,reduc:7,ref:[8,9,15,21],refer:[4,6,7,8,9,12,15,20,21],referenc:19,regist:[6,10,14,17,18,19,20,23],register_nam:[6,19,20],register_new_process:[6,19],registr:[9,19],registri:20,regular:[4,7,16],remain:[4,21],rememb:20,remot:[8,12,14,15,17,19,20,21],remote_nod:9,remov:[9,10,11,13,19],repeatedli:[0,1,3],repli:[6,15],report_dist_connect:8,repres:[10,12],request:[2,15],requir:[6,14,17],resolv:4,respond:6,rest:6,result1:4,result2:4,result2ref:4,result:[4,6,14,21,23],resultref:4,retriev:[4,21],rex:[4,6,15,17,21],rid:20,root:19,rout:[6,15],rpc:[4,15,17,23],run:[1,6,8,9,10,14,20],run_forev:[0,1,3,6],runtim:[17,22],same:[4,6,7,14,17],sauc:16,save:[8,21],schedul:1,script:4,search:17,second:[0,1,3],secret:16,see:[6,20],select:[1,2],self:[6,14,16,20],semant:20,send:[2,7,10,14,17,19,20,23],send_buffer_:2,sender:[6,15,19,23],sent:[6,7,19,23],separ:9,sequenc:4,serv:20,server:[3,14],set:[2,4,5,7],setcooki:[4,14],shell:[4,6,14],show:14,side:[4,6,17,21],signal:19,similar:[1,4,16],simpl:20,singl:4,situat:15,size:[7,8,21],sleep:[0,1,3,4,6,19],socket:[0,1,2,3,11,19],socket_modul:[0,1,3],solut:6,some:[6,7,14,19],someth:[2,8,10,14,19],sometim:7,soon:2,spawn:[0,1,3,4,17],special:[6,18,19],specif:18,specifi:6,start:[4,14,15,17,19],start_pyrlang:[5,22],state:8,state_:8,stop:[0,1,2,3,20],store:[4,6,9,19,21],str:[7,8,9,10,11,12,13,15,16,19,20,21,22],stream:[0,3],streamserv:3,string:[4,6,7,9,10,15,16,19,21,22],structur:6,style:[6,14,17,23],subclass:[6,20],subsequ:21,substitut:4,subtract:4,success:10,suitabl:3,support:[4,6,8,12],sure:6,system:6,tab:14,tabl:19,tail:7,take:[3,9,21],talk:14,target:[14,19,20],task:[0,1,3,6],tcp:[11,13],tell:[6,7,20],term:[6,15,19,20,21,22],termin:14,test:[6,14],text_:7,than:[7,21],thei:[4,6,8,21],them:[14,17,19],thi:[1,2,4,5,6,7,9,12,14,15,16,19,20,21,22,23],those:[7,15],time:[5,19,20],timeout:4,timer:[4,9],todo:[17,19],togeth:8,too:[6,14],total_second:4,traceback:[4,23],traceback_depth_:23,trail:12,transfer:4,transpar:6,trigger:19,trim:21,tty:6,tupl:[0,1,2,3,4,6,7,8,10,15,19,21,23],two:[4,14],type:[0,1,2,3,4,8,10,14,16,17,19,20,21,22],unabl:19,unconsum:2,undefin:6,under:23,unicod:[6,7],union:[2,8,16,19,20,22],uniqu:19,unix:4,unless:7,unnecessari:4,unregist:[6,20],until:[4,6,9,10,21],unus:6,updat:[4,21],upon:9,use:[4,6,7,8,14,19],used:[8,9,15,18,19,21],useful:[4,7],using:[4,6,14,17],utf8:7,util:[8,15,17],valu:[4,6,7,12,19,21],value_id:21,value_id_:21,value_not_found:21,valuerefer:4,variabl:[5,8,22],veri:[6,17],verif:8,version:8,via:[19,20,23],wai:[1,4,6,7,20],wait_ch_repli:8,wait_challenge_repli:8,wake:20,want:4,warn:5,wasn:15,well:6,went:10,were:[16,21],what:14,when:[2,6,8,14,15,19,20,21],whenev:19,where:[0,3,4,6,9,10,21],where_i:19,whether:[4,14],which:[0,1,2,3,4,5,6,7,9,10,14,15,16,17,18,19,21,23],who:[19,20],wire:6,without:[4,6],work:[4,6,14,17],world:6,would:[1,6],wrong:10,xxx:8,yes:5,you:[4,6,7,14,15,17,19,20],your:[4,6,14,15,17,19,20],yourself:6,zero:23},titles:["async.asyncio_engine module","async.base_engine module","async.base_protocol module","async.gevent_engine module","Remote Calling Python from Erlang","Configuring Pyrlang in Runtime","Cookbook - How to Get Started","Data Types in Pyrlang","Dist.base_dist_protocol module","Dist.distribution module","Dist.epmd module","Dist.in_dist_protocol module","Dist.node_opts module","Dist.out_dist_protocol module","Examples!","gen module - Generic OTP-style calls","gen_server module - Handling gen:calls nicely","Pyrlang Library","net_kernel module","node module (begin code exploration from here!)","process module","pyrlang.notebook module","util module","rex module - Remote Execution"],titleterms:{api:4,async:[0,1,2,3],asyncio_engin:0,base_dist_protocol:8,base_engin:1,base_protocol:2,batch:[4,14],begin:19,binari:7,calcul:6,call:[4,6,14,15,16],code:19,configur:5,connect:6,cookbook:6,data:7,decod:7,descript:4,dist:[8,9,10,11,12,13],distribut:[9,17],elixir:14,encod:7,epmd:10,erlang:[4,6,14],exampl:14,execut:23,explor:19,from:[4,6,19],gen:[15,16],gen_serv:[6,16],gener:15,genserv:14,get:6,gevent_engin:3,handl:16,here:19,how:6,implement:17,in_dist_protocol:11,indic:17,lazi:6,librari:17,like:6,list:7,local:6,modul:[0,1,2,3,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23],net_kernel:18,nice:16,node:[6,19],node_opt:12,notebook:[4,21],object:6,otp:15,out_dist_protocol:13,process:[6,20],protocol:17,pyrlang:[5,7,17,21],python:[4,6,14],quick:4,remot:[4,6,23],rex:23,rpc:6,runtim:5,send:6,start:6,style:[4,15],tabl:17,todo:6,type:7,util:22}})