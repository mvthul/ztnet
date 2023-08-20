// Member Related Types
export interface MemberEntity {
	id: string;
	name: string;
	hidden: boolean;
	activeBridge: boolean;
	address: string;
	nodeId?: string;
	authenticationExpiryTime: number;
	authorized: boolean;
	capabilities?: number[];
	creationTime: number;
	identity: string;
	ipAssignments: string[];
	lastAuthorizedCredential: null;
	lastAuthorizedCredentialType: string;
	lastAuthorizedTime: number;
	lastDeauthorizedTime: number;
	noAutoAssignIps: boolean;
	nwid: string;
	objtype: string;
	remoteTraceLevel: number;
	remoteTraceTarget: null;
	revision: number;
	ssoExempt: boolean;
	tags: NumberPairArray;
	peers: Peers;
	lastSeen?: number | datetime;
	conStatus?: number;
	vMajor: number;
	vMinor: number;
	vProto: number;
	vRev: number;
	action: null;
	notations?: NetworkMemberNotation[];
	physicalAddress?: string;
	accessorFn: () => void;
	config?: CentralMemberConfig;
	V6AssignMode?: V6AssignMode;
}
type NumberPairArray = [number, number][];

interface CentralMemberConfig {
	activeBridge: boolean;
	address: string;
	authorized: boolean;
	capabilities: number[];
	creationTime: number;
	id: string;
	identity: string;
	ipAssignments: string[];
	lastAuthorizedTime: number;
	lastDeauthorizedTime: number;
	noAutoAssignIps: boolean;
	nwid: string;
	objtype: string;
	remoteTraceLevel: number;
	remoteTraceTarget: string;
	revision: number;
	tags: number[][];
	vMajor: number;
	vMinor: number;
	vRev: number;
	vProto: number;
	ssoExempt: boolean;
}

export interface Peers {
	active: boolean;
	address: string;
	isBonded: boolean;
	latency: number;
	lastReceive: number;
	lastSend: number;
	localSocket?: number;
	paths?: Paths[];
	role: string;
	version: string;
	physicalAddress: string;
	versionMajor: number;
	versionMinor: number;
	versionRev: number;
	preferred: boolean;
	trustedPathId: number;
}

export interface Paths {
	active: boolean;
	address: string;
	expired: boolean;
	lastReceive: number;
	lastSend: number;
	localSocket?: number;
	preferred: boolean;
	trustedPathId: number;
}

export interface TagEnums {
	[key: string]: number;
}

export interface TagDetails {
	id: number;
	enums: TagEnums;
	flags: Record<string, unknown>; // replace 'unknown' with the appropriate type if you know it
	default: number | null;
}

export interface TagsByName {
	[tagName: string]: TagDetails;
}
export interface CapabilitiesByName {
	[key: string]: number;
}
export interface Tag {
	id: number;
	default: number;
	enums: TagEnums;
	flags: Record<string, unknown>; // replace 'unknown' with the appropriate type if you know it
}

// Notations
export interface NetworkMemberNotation {
	notationId: number;
	nodeid: number;
	label: Notation;
	member: MembersEntity;
}

export interface Notation {
	id: number;
	name: string;
	color?: string;
	description?: string;
	creationTime: Date;
	updatedTime: Date;
	isActive: boolean;
	nwid: string;
	network: NetworkEntity;
	networkMembers: NetworkMemberNotation[];
	icon?: string;
	orderIndex?: number;
	visibility?: string;
}
