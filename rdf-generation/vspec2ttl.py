#!/usr/bin/python

#
# Convert vspec file to RDF (turtle srialization)
#
from openpyxl import load_workbook
import sys
import vspec
import json
import getopt


data=[]
i=1

ns="http://automotive.eurecom.fr/vsso#"

class Entry(object):
    branch=[]
    name=""
    entryType=""
    unit=""
    path=""
    comment=""
    enum=[]
    sensor=""
    actuator=""
    children=[]

    def __init__(self,branch, name, entryType, unit, path, comment, enum, sensor, actuator, children):
        self.branch=branch
        self.name=name
        self.entryType=entryType
        self.unit=unit
        self.path=path
        self.comment=comment
        self.enum=enum
        self.sensor=sensor
        self.actuator=actuator
        self.children=children

def makeEntry(branch, name, entryType, unit, path, comment, enum, sensor, actuator,children):
    entry=Entry(branch, str(name), entryType, unit, path, comment, enum, sensor, actuator,children)
    return entry

def mapType(x):
    return {
    'UInt8': 'xsd:unsignedByte',
    'Int8': 'xsd:byte',
    'UInt16': 'xsd:unsignedShort',
    'Int16': 'xsd:short',
    'UInt32': 'xsd:unsignedInt',
    'Int32': 'xsd:int',
    'UInt64': 'xsd:unsignedLong',
    'Int64': 'xsd:long',
    'Boolean': 'xsd:boolean',
    'Float': 'xsd:float',
    'Double': 'xsd:double',
    'String': 'xsd:string',
    'ByteBuffer': 'TODO: map ByteBuffer'
    }[x]

def mapUnit(x):
    return {
    'A': 'qudt:ElectricCurrentUnit',
    'Nm': 'qudt:BendingMomentOrTorqueUnit',
    'N.m': 'qudt:BendingMomentOrTorqueUnit',
    'V': 'qudt:EnergyPerElectricChargeUnit',
    'celsius': 'qudt:TemperatureUnit',
    'cm/s': 'qudt:LinearVelocityUnit',
    'degree': 'qudt:AngleUnit',
    'degrees': 'qudt:AngleUnit',
    'degrees/s': 'qudt:AngularVelocityUnit',
    'g/s': 'qudt:MassPerTimeUnit',
    'inch': 'qudt:LengthUnit',
    'kW': 'qudt:PowerUnit',
    'kilometer': 'qudt:LengthUnit',
    'km': 'qudt:LengthUnit',
    'km/h': 'qudt:LinearVelocityUnit',
    'kpa': 'unit:PressureOrStressUnit',
    'l': 'qudt:VolumeUnit',
    'l/h': 'qudt:VolumePerTimeUnit',
    'm': 'qudt:LengthUnit',
    'm/s': 'qudt:LinearVelocityUnit',
    'm/s2': 'qudt:LinearAccelerationUnit',
    'mbar': 'unit:PressureOrStressUnit',
    'min': 'qudt:TimeUnit',
    'ml': 'qudt:VolumeUnit',
    'ml/100km': 'vss:VolumePerDistanceUnit', #TODO: create unit
    'l/100km': 'vss:VolumePerDistanceUnit', #TODO: create unit
    'mm': 'qudt:LengthUnit',
    'pa': 'unit:PressureOrStressUnit',
    'percent': 'qudt:DimensionlessUnit',
    'percentage': 'qudt:DimensionlessUnit',
    'ratio': 'qudt:DimensionlessUnit',
    'rpm': 'qudt:AngularVelocityUnit',
    's': 'qudt:TimeUnit',
    '""':""
}[x]

def writeTurtle(entry):
    towrite=""

    if entry.entryType == "branch" and entry.name not in ["Left","Right","Row1","Row2","Row3","Row4","Pos1","Pos2","Pos3","Pos4","Pos5"]:
        s="""
vss:{name} a rdfs:Class, owl:Class;
    rdfs:subClassOf vss:Branch;
    rdfs:label "{name}"@en;
    rdfs:comment "{path} : {comment}"@en
    rdfs:subClassOf [
        owl:onProperty vss:partOf;
        owl:allValuesFrom vss:{superBranch}.
    ];
    rdfs:subClassOf [
        owl:onProperty vss:hasSignal;
        owl:allValuesFrom [owl:unionOf {children}].
    ];
""".format(name=entry.name, path=entry.path, superBranch=entry.path.split(".")[len(entry.path.split("."))-2],comment=entry.comment,children=str(entry.children))
        towrite=towrite+s

    
    if entry.branch[0]=="Signal" and entry.entryType!="branch":
        subClass=""
        restriction=""
        device=""
        unit=mapUnit(entry.unit)
        print entry.name
        print unit

        if len(entry.sensor)>0 and len(entry.actuator)>0:
            subClass="vss:ObservableSignal, vss:ActuableSignal"
            restrictionSensor="sosa:isObservedBy"
            restrictionActuator="sosa:isActuatedBy"
            s="""
vss:{name} a rdfs:Class, owl:Class;
    rdfs:subClassOf {subClass};
    rdfs:label "{name}"@en;
    rdfs:comment "{path} : {comment}"@en
    rdfs:subClassOf [
        owl:onProperty {restrictionSensor};
        owl:allValuesFrom vss:{sensor}.
    ];
    rdfs:subClassOf [
        owl:onProperty {restrictionActuator};
        owl:allValuesFrom vss:{actuator}.
    ];
""".format(name=entry.name, subClass=subClass,path=entry.path, restrictionSensor=restrictionSensor, 
    restrictionActuator=restrictionActuator,comment=entry.comment,sensor=entry.sensor, actuator=entry.actuator)
        towrite=towrite+s

        if len(entry.sensor)>0 and len(entry.actuator)==0:
            subClass="vss:ObservableSignal"
            restriction="sosa:isObservedBy"
            device=entry.sensor
            s="""
vss:{name} a rdfs:Class, owl:Class;
    rdfs:subClassOf {subClass};
    rdfs:label "{name}"@en;
    rdfs:comment "{path} : {comment}"@en
    rdfs:subClassOf [
        owl:onProperty {restriction};
        owl:allValuesFrom vss:{device}.
    ];
""".format(name=entry.name, subClass=subClass,path=entry.path, restriction=restriction,comment=entry.comment,device=device)

        elif len(entry.sensor)==0 and len(entry.actuator)>0:
            subClass="vss:ActuableSignal"
            retsriction="sosa:isObservedBy"
            device=entry.actuator
            s="""
vss:{name} a rdfs:Class, owl:Class;
    rdfs:subClassOf {subClass};
    rdfs:label "{name}"@en;
    rdfs:comment "{path} : {comment}"@en
    rdfs:subClassOf [
        owl:onProperty {restriction};
        owl:allValuesFrom vss:{device}.
    ];
""".format(name=entry.name, subClass=subClass,path=entry.path, restriction=restriction,comment=entry.comment,device=device)
        elif len(entry.sensor)==0 and len(entry.actuator)==0:
            print "WARNING: the signal "+entry.path+" must have at least a sensor or an actuator to be compliant with the SOSA ontology"

        towrite=towrite+s

    if entry.branch[0]=="Attribute" and entry.entryType!="branch":
        if len(entry.enum)>1:
            propertyRange="[owl:oneOf("
            for x in entry.enum:
                propertyRange=propertyRange+'"'+x+'"@en,'
            propertyRange=propertyRange+")]"
        else:
            propertyRange=mapType(entry.entryType) #TODO: check translation
            
        s="""
vss:{name} a owl:DatatypeProperty;
    rdfs:subPropertyOf vss:attribute;
    rdfs:label "{name}"@en;
    rdfs:comment "{path} : {comment}"@en;
    rdfs:domain vss:{branch};
    rdfs:range {range}.

""".format(name=entry.name,path=entry.path,comment=entry.comment,branch=entry.branch[-2], range=propertyRange)
        towrite=towrite+s

    return towrite




def usage():
    print "Usage:", sys.argv[0], "[-I include_dir] ... [-i prefix:id_file:start_id] vspec_file ttl_file"
    print "  -I include_dir              Add include directory to search for included vspec"
    print "                              files. Can be used multiple timees."
    print
    print "  -i prefix:id_file:start_id  Add include directory to search for included vspec"
    print "                              files. Can be used multiple timees."
    print
    print " vspec_file                   The vehicle specification file to parse."
    print " ttl_file                    The file to output the RDF data to."
    sys.exit(255)

def getChildren(path, json_data):
    Children=[]
    for child in json_data['children']:
        if child in ["Left","Right","Row1","Row2","Row3","Row4","Pos1","Pos2","Pos3","Pos4","Pos5"]:
            Children= Children + getChildren(path,json_data["children"][child])
        elif json_data['children'][child]["type"]!="branch" and path.split(".")[0]=="Signal":
            Children.append(child)
    return Children

def getPosition(path, json_data):
    Position=[]
    for child in json_data['children']:
        if child in ["Left","Right","Row1","Row2","Row3","Row4","Pos1","Pos2","Pos3","Pos4","Pos5"]:
            Position.append(child)
            Position= Position + getPosition(path,json_data["children"][child])
    return Position

def format_data(path, json_data):
    Id = '""'
    Type = '""'
    Unit = '""'
    Min = '""'
    Max = '""'
    Desc = '""'
    Enum = '""'
    Sensor = '""'
    Actuator = '""'
    Children=[]
    Position=[]
    if (json_data.has_key('id')):
        Id = '"' + str(json_data['id']) + '"'
    if (json_data.has_key('type')):
        Type = json_data['type']
    if (json_data.has_key('unit')):
        Unit = json_data['unit']
    if (json_data.has_key('min')):
        Min = '"' + str(json_data['min']) + '"'
    if (json_data.has_key('max')):
        Max = '"' + str(json_data['max']) + '"'
    if (json_data.has_key('description')):
        Desc = json_data['description']
    if (json_data.has_key('enum')):
        Enum = json_data['enum']
    if (json_data.has_key('sensor')):
        Sensor = '"' + str(json_data['sensor']) + '"'
    if (json_data.has_key('actuator')):
        Actuator = '"' + str(json_data['actuator']) + '"'
    if (json_data.has_key('children')):
        Children=list(set(getChildren(path, json_data)))
        Position=list(set(getPosition(path, json_data)))
    print path
    print Position
    return makeEntry(path.split('.'),path.split('.')[-1],Type, Unit, path,Desc, Enum, Sensor, Actuator, Children)

def json2rdf(json_data, file_out, parent_signal):
    for k in json_data.keys():
        if (len(parent_signal) > 0):
            signal = parent_signal + "." + k
        else:
            signal = k

        if (json_data[k]['type'] == 'branch'):
            #file_out.write(signal + ',' + format_data(json_data[k]) + '\n')
            file_out.write(writeTurtle(format_data(signal,json_data[k])))
            json2rdf(json_data[k]['children'], file_out, signal)
        else:
            #file_out.write(signal + ',' + format_data(json_data[k]) + '\n')
            file_out.write(writeTurtle(format_data(signal,json_data[k])))

if __name__ == "__main__":
    # 
    # Check that we have the correct arguments
    #
    opts, args= getopt.getopt(sys.argv[1:], "I:i:")

    # Always search current directory for include_file
    include_dirs = ["."]
    for o, a in opts:
        if o == "-I":
            include_dirs.append(a)
        elif o == "-i":
            id_spec = a.split(":")
            if len(id_spec) != 3:
                print "ERROR: -i needs a 'prefix:id_file:start_id' argument."
                usage()

            [prefix, file_name, start_id] = id_spec
            vspec.db_mgr.create_signal_db(prefix, file_name, int(start_id))
        else:
            usage()

    if len(args) != 2:
        usage()

    rdf_out = open (args[1], "w")

    try:
        tree = vspec.load(args[0], include_dirs)
    except vspec.VSpecError as e:
        print "Error: {}".format(e)
        exit(255)

    json2rdf(tree, rdf_out, "")
    rdf_out.write("\n")
    rdf_out.close()