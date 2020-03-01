export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
   __typename?: 'Directory',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  birthtime?: Maybe<Scalars['Date']>,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime'
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
};

export type DirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type EducationJson = Node & {
   __typename?: 'EducationJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  major?: Maybe<Scalars['String']>,
  university?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  mark?: Maybe<EducationJsonMark>,
};

export type EducationJsonConnection = {
   __typename?: 'EducationJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<EducationJsonEdge>,
  nodes: Array<EducationJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<EducationJsonGroupConnection>,
};


export type EducationJsonConnectionDistinctArgs = {
  field: EducationJsonFieldsEnum
};


export type EducationJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: EducationJsonFieldsEnum
};

export type EducationJsonEdge = {
   __typename?: 'EducationJsonEdge',
  next?: Maybe<EducationJson>,
  node: EducationJson,
  previous?: Maybe<EducationJson>,
};

export enum EducationJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  major = 'major',
  university = 'university',
  period = 'period',
  mark___name = 'mark___name',
  mark___value = 'mark___value'
}

export type EducationJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  major?: Maybe<StringQueryOperatorInput>,
  university?: Maybe<StringQueryOperatorInput>,
  period?: Maybe<StringQueryOperatorInput>,
  mark?: Maybe<EducationJsonMarkFilterInput>,
};

export type EducationJsonGroupConnection = {
   __typename?: 'EducationJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<EducationJsonEdge>,
  nodes: Array<EducationJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type EducationJsonMark = {
   __typename?: 'EducationJsonMark',
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type EducationJsonMarkFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  value?: Maybe<StringQueryOperatorInput>,
};

export type EducationJsonSortInput = {
  fields?: Maybe<Array<Maybe<EducationJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ExperienceJson = Node & {
   __typename?: 'ExperienceJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  company?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  achievements?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ExperienceJsonConnection = {
   __typename?: 'ExperienceJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<ExperienceJsonEdge>,
  nodes: Array<ExperienceJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ExperienceJsonGroupConnection>,
};


export type ExperienceJsonConnectionDistinctArgs = {
  field: ExperienceJsonFieldsEnum
};


export type ExperienceJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ExperienceJsonFieldsEnum
};

export type ExperienceJsonEdge = {
   __typename?: 'ExperienceJsonEdge',
  next?: Maybe<ExperienceJson>,
  node: ExperienceJson,
  previous?: Maybe<ExperienceJson>,
};

export enum ExperienceJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  company = 'company',
  position = 'position',
  period = 'period',
  achievements = 'achievements'
}

export type ExperienceJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  company?: Maybe<StringQueryOperatorInput>,
  position?: Maybe<StringQueryOperatorInput>,
  period?: Maybe<StringQueryOperatorInput>,
  achievements?: Maybe<StringQueryOperatorInput>,
};

export type ExperienceJsonFilterListInput = {
  elemMatch?: Maybe<ExperienceJsonFilterInput>,
};

export type ExperienceJsonGroupConnection = {
   __typename?: 'ExperienceJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ExperienceJsonEdge>,
  nodes: Array<ExperienceJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ExperienceJsonSortInput = {
  fields?: Maybe<Array<Maybe<ExperienceJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type File = Node & {
   __typename?: 'File',
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childResumeJson?: Maybe<ResumeJson>,
  childImageSharp?: Maybe<ImageSharp>,
  childrenExperienceJson?: Maybe<Array<Maybe<ExperienceJson>>>,
  childEducationJson?: Maybe<EducationJson>,
  childrenSkillJson?: Maybe<Array<Maybe<SkillJson>>>,
  childrenLanguageJson?: Maybe<Array<Maybe<LanguageJson>>>,
  childrenProjectJson?: Maybe<Array<Maybe<ProjectJson>>>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
   __typename?: 'FileEdge',
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  publicURL = 'publicURL',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  childResumeJson___id = 'childResumeJson___id',
  childResumeJson___parent___id = 'childResumeJson___parent___id',
  childResumeJson___parent___parent___id = 'childResumeJson___parent___parent___id',
  childResumeJson___parent___parent___children = 'childResumeJson___parent___parent___children',
  childResumeJson___parent___children = 'childResumeJson___parent___children',
  childResumeJson___parent___children___id = 'childResumeJson___parent___children___id',
  childResumeJson___parent___children___children = 'childResumeJson___parent___children___children',
  childResumeJson___parent___internal___content = 'childResumeJson___parent___internal___content',
  childResumeJson___parent___internal___contentDigest = 'childResumeJson___parent___internal___contentDigest',
  childResumeJson___parent___internal___description = 'childResumeJson___parent___internal___description',
  childResumeJson___parent___internal___fieldOwners = 'childResumeJson___parent___internal___fieldOwners',
  childResumeJson___parent___internal___ignoreType = 'childResumeJson___parent___internal___ignoreType',
  childResumeJson___parent___internal___mediaType = 'childResumeJson___parent___internal___mediaType',
  childResumeJson___parent___internal___owner = 'childResumeJson___parent___internal___owner',
  childResumeJson___parent___internal___type = 'childResumeJson___parent___internal___type',
  childResumeJson___children = 'childResumeJson___children',
  childResumeJson___children___id = 'childResumeJson___children___id',
  childResumeJson___children___parent___id = 'childResumeJson___children___parent___id',
  childResumeJson___children___parent___children = 'childResumeJson___children___parent___children',
  childResumeJson___children___children = 'childResumeJson___children___children',
  childResumeJson___children___children___id = 'childResumeJson___children___children___id',
  childResumeJson___children___children___children = 'childResumeJson___children___children___children',
  childResumeJson___children___internal___content = 'childResumeJson___children___internal___content',
  childResumeJson___children___internal___contentDigest = 'childResumeJson___children___internal___contentDigest',
  childResumeJson___children___internal___description = 'childResumeJson___children___internal___description',
  childResumeJson___children___internal___fieldOwners = 'childResumeJson___children___internal___fieldOwners',
  childResumeJson___children___internal___ignoreType = 'childResumeJson___children___internal___ignoreType',
  childResumeJson___children___internal___mediaType = 'childResumeJson___children___internal___mediaType',
  childResumeJson___children___internal___owner = 'childResumeJson___children___internal___owner',
  childResumeJson___children___internal___type = 'childResumeJson___children___internal___type',
  childResumeJson___internal___content = 'childResumeJson___internal___content',
  childResumeJson___internal___contentDigest = 'childResumeJson___internal___contentDigest',
  childResumeJson___internal___description = 'childResumeJson___internal___description',
  childResumeJson___internal___fieldOwners = 'childResumeJson___internal___fieldOwners',
  childResumeJson___internal___ignoreType = 'childResumeJson___internal___ignoreType',
  childResumeJson___internal___mediaType = 'childResumeJson___internal___mediaType',
  childResumeJson___internal___owner = 'childResumeJson___internal___owner',
  childResumeJson___internal___type = 'childResumeJson___internal___type',
  childResumeJson___fullname = 'childResumeJson___fullname',
  childResumeJson___position = 'childResumeJson___position',
  childResumeJson___detail___dateOfBirth = 'childResumeJson___detail___dateOfBirth',
  childResumeJson___detail___place = 'childResumeJson___detail___place',
  childResumeJson___detail___phone = 'childResumeJson___detail___phone',
  childResumeJson___detail___email = 'childResumeJson___detail___email',
  childResumeJson___social___github = 'childResumeJson___social___github',
  childResumeJson___social___linkedin = 'childResumeJson___social___linkedin',
  childResumeJson___summary = 'childResumeJson___summary',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp___resolutions___base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp___resolutions___tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp___resolutions___aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp___resolutions___width',
  childImageSharp___resolutions___height = 'childImageSharp___resolutions___height',
  childImageSharp___resolutions___src = 'childImageSharp___resolutions___src',
  childImageSharp___resolutions___srcSet = 'childImageSharp___resolutions___srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp___resolutions___srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp___resolutions___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp___sizes___base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp___sizes___tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp___sizes___aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp___sizes___src',
  childImageSharp___sizes___srcSet = 'childImageSharp___sizes___srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp___sizes___srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp___sizes___sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp___sizes___originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp___sizes___originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp___sizes___presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp___sizes___presentationHeight',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childrenExperienceJson = 'childrenExperienceJson',
  childrenExperienceJson___id = 'childrenExperienceJson___id',
  childrenExperienceJson___parent___id = 'childrenExperienceJson___parent___id',
  childrenExperienceJson___parent___parent___id = 'childrenExperienceJson___parent___parent___id',
  childrenExperienceJson___parent___parent___children = 'childrenExperienceJson___parent___parent___children',
  childrenExperienceJson___parent___children = 'childrenExperienceJson___parent___children',
  childrenExperienceJson___parent___children___id = 'childrenExperienceJson___parent___children___id',
  childrenExperienceJson___parent___children___children = 'childrenExperienceJson___parent___children___children',
  childrenExperienceJson___parent___internal___content = 'childrenExperienceJson___parent___internal___content',
  childrenExperienceJson___parent___internal___contentDigest = 'childrenExperienceJson___parent___internal___contentDigest',
  childrenExperienceJson___parent___internal___description = 'childrenExperienceJson___parent___internal___description',
  childrenExperienceJson___parent___internal___fieldOwners = 'childrenExperienceJson___parent___internal___fieldOwners',
  childrenExperienceJson___parent___internal___ignoreType = 'childrenExperienceJson___parent___internal___ignoreType',
  childrenExperienceJson___parent___internal___mediaType = 'childrenExperienceJson___parent___internal___mediaType',
  childrenExperienceJson___parent___internal___owner = 'childrenExperienceJson___parent___internal___owner',
  childrenExperienceJson___parent___internal___type = 'childrenExperienceJson___parent___internal___type',
  childrenExperienceJson___children = 'childrenExperienceJson___children',
  childrenExperienceJson___children___id = 'childrenExperienceJson___children___id',
  childrenExperienceJson___children___parent___id = 'childrenExperienceJson___children___parent___id',
  childrenExperienceJson___children___parent___children = 'childrenExperienceJson___children___parent___children',
  childrenExperienceJson___children___children = 'childrenExperienceJson___children___children',
  childrenExperienceJson___children___children___id = 'childrenExperienceJson___children___children___id',
  childrenExperienceJson___children___children___children = 'childrenExperienceJson___children___children___children',
  childrenExperienceJson___children___internal___content = 'childrenExperienceJson___children___internal___content',
  childrenExperienceJson___children___internal___contentDigest = 'childrenExperienceJson___children___internal___contentDigest',
  childrenExperienceJson___children___internal___description = 'childrenExperienceJson___children___internal___description',
  childrenExperienceJson___children___internal___fieldOwners = 'childrenExperienceJson___children___internal___fieldOwners',
  childrenExperienceJson___children___internal___ignoreType = 'childrenExperienceJson___children___internal___ignoreType',
  childrenExperienceJson___children___internal___mediaType = 'childrenExperienceJson___children___internal___mediaType',
  childrenExperienceJson___children___internal___owner = 'childrenExperienceJson___children___internal___owner',
  childrenExperienceJson___children___internal___type = 'childrenExperienceJson___children___internal___type',
  childrenExperienceJson___internal___content = 'childrenExperienceJson___internal___content',
  childrenExperienceJson___internal___contentDigest = 'childrenExperienceJson___internal___contentDigest',
  childrenExperienceJson___internal___description = 'childrenExperienceJson___internal___description',
  childrenExperienceJson___internal___fieldOwners = 'childrenExperienceJson___internal___fieldOwners',
  childrenExperienceJson___internal___ignoreType = 'childrenExperienceJson___internal___ignoreType',
  childrenExperienceJson___internal___mediaType = 'childrenExperienceJson___internal___mediaType',
  childrenExperienceJson___internal___owner = 'childrenExperienceJson___internal___owner',
  childrenExperienceJson___internal___type = 'childrenExperienceJson___internal___type',
  childrenExperienceJson___company = 'childrenExperienceJson___company',
  childrenExperienceJson___position = 'childrenExperienceJson___position',
  childrenExperienceJson___period = 'childrenExperienceJson___period',
  childrenExperienceJson___achievements = 'childrenExperienceJson___achievements',
  childEducationJson___id = 'childEducationJson___id',
  childEducationJson___parent___id = 'childEducationJson___parent___id',
  childEducationJson___parent___parent___id = 'childEducationJson___parent___parent___id',
  childEducationJson___parent___parent___children = 'childEducationJson___parent___parent___children',
  childEducationJson___parent___children = 'childEducationJson___parent___children',
  childEducationJson___parent___children___id = 'childEducationJson___parent___children___id',
  childEducationJson___parent___children___children = 'childEducationJson___parent___children___children',
  childEducationJson___parent___internal___content = 'childEducationJson___parent___internal___content',
  childEducationJson___parent___internal___contentDigest = 'childEducationJson___parent___internal___contentDigest',
  childEducationJson___parent___internal___description = 'childEducationJson___parent___internal___description',
  childEducationJson___parent___internal___fieldOwners = 'childEducationJson___parent___internal___fieldOwners',
  childEducationJson___parent___internal___ignoreType = 'childEducationJson___parent___internal___ignoreType',
  childEducationJson___parent___internal___mediaType = 'childEducationJson___parent___internal___mediaType',
  childEducationJson___parent___internal___owner = 'childEducationJson___parent___internal___owner',
  childEducationJson___parent___internal___type = 'childEducationJson___parent___internal___type',
  childEducationJson___children = 'childEducationJson___children',
  childEducationJson___children___id = 'childEducationJson___children___id',
  childEducationJson___children___parent___id = 'childEducationJson___children___parent___id',
  childEducationJson___children___parent___children = 'childEducationJson___children___parent___children',
  childEducationJson___children___children = 'childEducationJson___children___children',
  childEducationJson___children___children___id = 'childEducationJson___children___children___id',
  childEducationJson___children___children___children = 'childEducationJson___children___children___children',
  childEducationJson___children___internal___content = 'childEducationJson___children___internal___content',
  childEducationJson___children___internal___contentDigest = 'childEducationJson___children___internal___contentDigest',
  childEducationJson___children___internal___description = 'childEducationJson___children___internal___description',
  childEducationJson___children___internal___fieldOwners = 'childEducationJson___children___internal___fieldOwners',
  childEducationJson___children___internal___ignoreType = 'childEducationJson___children___internal___ignoreType',
  childEducationJson___children___internal___mediaType = 'childEducationJson___children___internal___mediaType',
  childEducationJson___children___internal___owner = 'childEducationJson___children___internal___owner',
  childEducationJson___children___internal___type = 'childEducationJson___children___internal___type',
  childEducationJson___internal___content = 'childEducationJson___internal___content',
  childEducationJson___internal___contentDigest = 'childEducationJson___internal___contentDigest',
  childEducationJson___internal___description = 'childEducationJson___internal___description',
  childEducationJson___internal___fieldOwners = 'childEducationJson___internal___fieldOwners',
  childEducationJson___internal___ignoreType = 'childEducationJson___internal___ignoreType',
  childEducationJson___internal___mediaType = 'childEducationJson___internal___mediaType',
  childEducationJson___internal___owner = 'childEducationJson___internal___owner',
  childEducationJson___internal___type = 'childEducationJson___internal___type',
  childEducationJson___major = 'childEducationJson___major',
  childEducationJson___university = 'childEducationJson___university',
  childEducationJson___period = 'childEducationJson___period',
  childEducationJson___mark___name = 'childEducationJson___mark___name',
  childEducationJson___mark___value = 'childEducationJson___mark___value',
  childrenSkillJson = 'childrenSkillJson',
  childrenSkillJson___id = 'childrenSkillJson___id',
  childrenSkillJson___parent___id = 'childrenSkillJson___parent___id',
  childrenSkillJson___parent___parent___id = 'childrenSkillJson___parent___parent___id',
  childrenSkillJson___parent___parent___children = 'childrenSkillJson___parent___parent___children',
  childrenSkillJson___parent___children = 'childrenSkillJson___parent___children',
  childrenSkillJson___parent___children___id = 'childrenSkillJson___parent___children___id',
  childrenSkillJson___parent___children___children = 'childrenSkillJson___parent___children___children',
  childrenSkillJson___parent___internal___content = 'childrenSkillJson___parent___internal___content',
  childrenSkillJson___parent___internal___contentDigest = 'childrenSkillJson___parent___internal___contentDigest',
  childrenSkillJson___parent___internal___description = 'childrenSkillJson___parent___internal___description',
  childrenSkillJson___parent___internal___fieldOwners = 'childrenSkillJson___parent___internal___fieldOwners',
  childrenSkillJson___parent___internal___ignoreType = 'childrenSkillJson___parent___internal___ignoreType',
  childrenSkillJson___parent___internal___mediaType = 'childrenSkillJson___parent___internal___mediaType',
  childrenSkillJson___parent___internal___owner = 'childrenSkillJson___parent___internal___owner',
  childrenSkillJson___parent___internal___type = 'childrenSkillJson___parent___internal___type',
  childrenSkillJson___children = 'childrenSkillJson___children',
  childrenSkillJson___children___id = 'childrenSkillJson___children___id',
  childrenSkillJson___children___parent___id = 'childrenSkillJson___children___parent___id',
  childrenSkillJson___children___parent___children = 'childrenSkillJson___children___parent___children',
  childrenSkillJson___children___children = 'childrenSkillJson___children___children',
  childrenSkillJson___children___children___id = 'childrenSkillJson___children___children___id',
  childrenSkillJson___children___children___children = 'childrenSkillJson___children___children___children',
  childrenSkillJson___children___internal___content = 'childrenSkillJson___children___internal___content',
  childrenSkillJson___children___internal___contentDigest = 'childrenSkillJson___children___internal___contentDigest',
  childrenSkillJson___children___internal___description = 'childrenSkillJson___children___internal___description',
  childrenSkillJson___children___internal___fieldOwners = 'childrenSkillJson___children___internal___fieldOwners',
  childrenSkillJson___children___internal___ignoreType = 'childrenSkillJson___children___internal___ignoreType',
  childrenSkillJson___children___internal___mediaType = 'childrenSkillJson___children___internal___mediaType',
  childrenSkillJson___children___internal___owner = 'childrenSkillJson___children___internal___owner',
  childrenSkillJson___children___internal___type = 'childrenSkillJson___children___internal___type',
  childrenSkillJson___internal___content = 'childrenSkillJson___internal___content',
  childrenSkillJson___internal___contentDigest = 'childrenSkillJson___internal___contentDigest',
  childrenSkillJson___internal___description = 'childrenSkillJson___internal___description',
  childrenSkillJson___internal___fieldOwners = 'childrenSkillJson___internal___fieldOwners',
  childrenSkillJson___internal___ignoreType = 'childrenSkillJson___internal___ignoreType',
  childrenSkillJson___internal___mediaType = 'childrenSkillJson___internal___mediaType',
  childrenSkillJson___internal___owner = 'childrenSkillJson___internal___owner',
  childrenSkillJson___internal___type = 'childrenSkillJson___internal___type',
  childrenSkillJson___name = 'childrenSkillJson___name',
  childrenSkillJson___proficient = 'childrenSkillJson___proficient',
  childrenSkillJson___show = 'childrenSkillJson___show',
  childrenLanguageJson = 'childrenLanguageJson',
  childrenLanguageJson___id = 'childrenLanguageJson___id',
  childrenLanguageJson___parent___id = 'childrenLanguageJson___parent___id',
  childrenLanguageJson___parent___parent___id = 'childrenLanguageJson___parent___parent___id',
  childrenLanguageJson___parent___parent___children = 'childrenLanguageJson___parent___parent___children',
  childrenLanguageJson___parent___children = 'childrenLanguageJson___parent___children',
  childrenLanguageJson___parent___children___id = 'childrenLanguageJson___parent___children___id',
  childrenLanguageJson___parent___children___children = 'childrenLanguageJson___parent___children___children',
  childrenLanguageJson___parent___internal___content = 'childrenLanguageJson___parent___internal___content',
  childrenLanguageJson___parent___internal___contentDigest = 'childrenLanguageJson___parent___internal___contentDigest',
  childrenLanguageJson___parent___internal___description = 'childrenLanguageJson___parent___internal___description',
  childrenLanguageJson___parent___internal___fieldOwners = 'childrenLanguageJson___parent___internal___fieldOwners',
  childrenLanguageJson___parent___internal___ignoreType = 'childrenLanguageJson___parent___internal___ignoreType',
  childrenLanguageJson___parent___internal___mediaType = 'childrenLanguageJson___parent___internal___mediaType',
  childrenLanguageJson___parent___internal___owner = 'childrenLanguageJson___parent___internal___owner',
  childrenLanguageJson___parent___internal___type = 'childrenLanguageJson___parent___internal___type',
  childrenLanguageJson___children = 'childrenLanguageJson___children',
  childrenLanguageJson___children___id = 'childrenLanguageJson___children___id',
  childrenLanguageJson___children___parent___id = 'childrenLanguageJson___children___parent___id',
  childrenLanguageJson___children___parent___children = 'childrenLanguageJson___children___parent___children',
  childrenLanguageJson___children___children = 'childrenLanguageJson___children___children',
  childrenLanguageJson___children___children___id = 'childrenLanguageJson___children___children___id',
  childrenLanguageJson___children___children___children = 'childrenLanguageJson___children___children___children',
  childrenLanguageJson___children___internal___content = 'childrenLanguageJson___children___internal___content',
  childrenLanguageJson___children___internal___contentDigest = 'childrenLanguageJson___children___internal___contentDigest',
  childrenLanguageJson___children___internal___description = 'childrenLanguageJson___children___internal___description',
  childrenLanguageJson___children___internal___fieldOwners = 'childrenLanguageJson___children___internal___fieldOwners',
  childrenLanguageJson___children___internal___ignoreType = 'childrenLanguageJson___children___internal___ignoreType',
  childrenLanguageJson___children___internal___mediaType = 'childrenLanguageJson___children___internal___mediaType',
  childrenLanguageJson___children___internal___owner = 'childrenLanguageJson___children___internal___owner',
  childrenLanguageJson___children___internal___type = 'childrenLanguageJson___children___internal___type',
  childrenLanguageJson___internal___content = 'childrenLanguageJson___internal___content',
  childrenLanguageJson___internal___contentDigest = 'childrenLanguageJson___internal___contentDigest',
  childrenLanguageJson___internal___description = 'childrenLanguageJson___internal___description',
  childrenLanguageJson___internal___fieldOwners = 'childrenLanguageJson___internal___fieldOwners',
  childrenLanguageJson___internal___ignoreType = 'childrenLanguageJson___internal___ignoreType',
  childrenLanguageJson___internal___mediaType = 'childrenLanguageJson___internal___mediaType',
  childrenLanguageJson___internal___owner = 'childrenLanguageJson___internal___owner',
  childrenLanguageJson___internal___type = 'childrenLanguageJson___internal___type',
  childrenLanguageJson___name = 'childrenLanguageJson___name',
  childrenLanguageJson___level = 'childrenLanguageJson___level',
  childrenLanguageJson___show = 'childrenLanguageJson___show',
  childrenProjectJson = 'childrenProjectJson',
  childrenProjectJson___id = 'childrenProjectJson___id',
  childrenProjectJson___parent___id = 'childrenProjectJson___parent___id',
  childrenProjectJson___parent___parent___id = 'childrenProjectJson___parent___parent___id',
  childrenProjectJson___parent___parent___children = 'childrenProjectJson___parent___parent___children',
  childrenProjectJson___parent___children = 'childrenProjectJson___parent___children',
  childrenProjectJson___parent___children___id = 'childrenProjectJson___parent___children___id',
  childrenProjectJson___parent___children___children = 'childrenProjectJson___parent___children___children',
  childrenProjectJson___parent___internal___content = 'childrenProjectJson___parent___internal___content',
  childrenProjectJson___parent___internal___contentDigest = 'childrenProjectJson___parent___internal___contentDigest',
  childrenProjectJson___parent___internal___description = 'childrenProjectJson___parent___internal___description',
  childrenProjectJson___parent___internal___fieldOwners = 'childrenProjectJson___parent___internal___fieldOwners',
  childrenProjectJson___parent___internal___ignoreType = 'childrenProjectJson___parent___internal___ignoreType',
  childrenProjectJson___parent___internal___mediaType = 'childrenProjectJson___parent___internal___mediaType',
  childrenProjectJson___parent___internal___owner = 'childrenProjectJson___parent___internal___owner',
  childrenProjectJson___parent___internal___type = 'childrenProjectJson___parent___internal___type',
  childrenProjectJson___children = 'childrenProjectJson___children',
  childrenProjectJson___children___id = 'childrenProjectJson___children___id',
  childrenProjectJson___children___parent___id = 'childrenProjectJson___children___parent___id',
  childrenProjectJson___children___parent___children = 'childrenProjectJson___children___parent___children',
  childrenProjectJson___children___children = 'childrenProjectJson___children___children',
  childrenProjectJson___children___children___id = 'childrenProjectJson___children___children___id',
  childrenProjectJson___children___children___children = 'childrenProjectJson___children___children___children',
  childrenProjectJson___children___internal___content = 'childrenProjectJson___children___internal___content',
  childrenProjectJson___children___internal___contentDigest = 'childrenProjectJson___children___internal___contentDigest',
  childrenProjectJson___children___internal___description = 'childrenProjectJson___children___internal___description',
  childrenProjectJson___children___internal___fieldOwners = 'childrenProjectJson___children___internal___fieldOwners',
  childrenProjectJson___children___internal___ignoreType = 'childrenProjectJson___children___internal___ignoreType',
  childrenProjectJson___children___internal___mediaType = 'childrenProjectJson___children___internal___mediaType',
  childrenProjectJson___children___internal___owner = 'childrenProjectJson___children___internal___owner',
  childrenProjectJson___children___internal___type = 'childrenProjectJson___children___internal___type',
  childrenProjectJson___internal___content = 'childrenProjectJson___internal___content',
  childrenProjectJson___internal___contentDigest = 'childrenProjectJson___internal___contentDigest',
  childrenProjectJson___internal___description = 'childrenProjectJson___internal___description',
  childrenProjectJson___internal___fieldOwners = 'childrenProjectJson___internal___fieldOwners',
  childrenProjectJson___internal___ignoreType = 'childrenProjectJson___internal___ignoreType',
  childrenProjectJson___internal___mediaType = 'childrenProjectJson___internal___mediaType',
  childrenProjectJson___internal___owner = 'childrenProjectJson___internal___owner',
  childrenProjectJson___internal___type = 'childrenProjectJson___internal___type',
  childrenProjectJson___name = 'childrenProjectJson___name',
  childrenProjectJson___link = 'childrenProjectJson___link',
  childrenProjectJson___description = 'childrenProjectJson___description',
  childrenProjectJson___show = 'childrenProjectJson___show'
}

export type FileFilterInput = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childResumeJson?: Maybe<ResumeJsonFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  childrenExperienceJson?: Maybe<ExperienceJsonFilterListInput>,
  childEducationJson?: Maybe<EducationJsonFilterInput>,
  childrenSkillJson?: Maybe<SkillJsonFilterListInput>,
  childrenLanguageJson?: Maybe<LanguageJsonFilterListInput>,
  childrenProjectJson?: Maybe<ProjectJsonFilterListInput>,
};

export type FileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export type ImageSharp = Node & {
   __typename?: 'ImageSharp',
  id: Scalars['ID'],
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
   __typename?: 'ImageSharpConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
   __typename?: 'ImageSharpEdge',
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  id = 'id',
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  sizes___presentationWidth = 'sizes___presentationWidth',
  sizes___presentationHeight = 'sizes___presentationHeight',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ImageSharpFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
   __typename?: 'ImageSharpFixed',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
   __typename?: 'ImageSharpFluid',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
   __typename?: 'ImageSharpGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
   __typename?: 'ImageSharpOriginal',
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
   __typename?: 'ImageSharpResize',
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
   __typename?: 'ImageSharpResolutions',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
   __typename?: 'ImageSharpSizes',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
   __typename?: 'Internal',
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type LanguageJson = Node & {
   __typename?: 'LanguageJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['String']>,
  show?: Maybe<Scalars['Boolean']>,
};

export type LanguageJsonConnection = {
   __typename?: 'LanguageJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<LanguageJsonEdge>,
  nodes: Array<LanguageJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<LanguageJsonGroupConnection>,
};


export type LanguageJsonConnectionDistinctArgs = {
  field: LanguageJsonFieldsEnum
};


export type LanguageJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: LanguageJsonFieldsEnum
};

export type LanguageJsonEdge = {
   __typename?: 'LanguageJsonEdge',
  next?: Maybe<LanguageJson>,
  node: LanguageJson,
  previous?: Maybe<LanguageJson>,
};

export enum LanguageJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  level = 'level',
  show = 'show'
}

export type LanguageJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  level?: Maybe<StringQueryOperatorInput>,
  show?: Maybe<BooleanQueryOperatorInput>,
};

export type LanguageJsonFilterListInput = {
  elemMatch?: Maybe<LanguageJsonFilterInput>,
};

export type LanguageJsonGroupConnection = {
   __typename?: 'LanguageJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<LanguageJsonEdge>,
  nodes: Array<LanguageJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type LanguageJsonSortInput = {
  fields?: Maybe<Array<Maybe<LanguageJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export type ProjectJson = Node & {
   __typename?: 'ProjectJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  description?: Maybe<Array<Maybe<Scalars['String']>>>,
  show?: Maybe<Scalars['Boolean']>,
};

export type ProjectJsonConnection = {
   __typename?: 'ProjectJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<ProjectJsonEdge>,
  nodes: Array<ProjectJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ProjectJsonGroupConnection>,
};


export type ProjectJsonConnectionDistinctArgs = {
  field: ProjectJsonFieldsEnum
};


export type ProjectJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ProjectJsonFieldsEnum
};

export type ProjectJsonEdge = {
   __typename?: 'ProjectJsonEdge',
  next?: Maybe<ProjectJson>,
  node: ProjectJson,
  previous?: Maybe<ProjectJson>,
};

export enum ProjectJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  link = 'link',
  description = 'description',
  show = 'show'
}

export type ProjectJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  show?: Maybe<BooleanQueryOperatorInput>,
};

export type ProjectJsonFilterListInput = {
  elemMatch?: Maybe<ProjectJsonFilterInput>,
};

export type ProjectJsonGroupConnection = {
   __typename?: 'ProjectJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ProjectJsonEdge>,
  nodes: Array<ProjectJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ProjectJsonSortInput = {
  fields?: Maybe<Array<Maybe<ProjectJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Query = {
   __typename?: 'Query',
  file?: Maybe<File>,
  allFile: FileConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  resumeJson?: Maybe<ResumeJson>,
  allResumeJson: ResumeJsonConnection,
  experienceJson?: Maybe<ExperienceJson>,
  allExperienceJson: ExperienceJsonConnection,
  educationJson?: Maybe<EducationJson>,
  allEducationJson: EducationJsonConnection,
  skillJson?: Maybe<SkillJson>,
  allSkillJson: SkillJsonConnection,
  languageJson?: Maybe<LanguageJson>,
  allLanguageJson: LanguageJsonConnection,
  projectJson?: Maybe<ProjectJson>,
  allProjectJson: ProjectJsonConnection,
};


export type QueryFileArgs = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childResumeJson?: Maybe<ResumeJsonFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  childrenExperienceJson?: Maybe<ExperienceJsonFilterListInput>,
  childEducationJson?: Maybe<EducationJsonFilterInput>,
  childrenSkillJson?: Maybe<SkillJsonFilterListInput>,
  childrenLanguageJson?: Maybe<LanguageJsonFilterListInput>,
  childrenProjectJson?: Maybe<ProjectJsonFilterListInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryResumeJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  fullname?: Maybe<StringQueryOperatorInput>,
  position?: Maybe<StringQueryOperatorInput>,
  detail?: Maybe<ResumeJsonDetailFilterInput>,
  social?: Maybe<ResumeJsonSocialFilterInput>,
  summary?: Maybe<StringQueryOperatorInput>
};


export type QueryAllResumeJsonArgs = {
  filter?: Maybe<ResumeJsonFilterInput>,
  sort?: Maybe<ResumeJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryExperienceJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  company?: Maybe<StringQueryOperatorInput>,
  position?: Maybe<StringQueryOperatorInput>,
  period?: Maybe<StringQueryOperatorInput>,
  achievements?: Maybe<StringQueryOperatorInput>
};


export type QueryAllExperienceJsonArgs = {
  filter?: Maybe<ExperienceJsonFilterInput>,
  sort?: Maybe<ExperienceJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryEducationJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  major?: Maybe<StringQueryOperatorInput>,
  university?: Maybe<StringQueryOperatorInput>,
  period?: Maybe<StringQueryOperatorInput>,
  mark?: Maybe<EducationJsonMarkFilterInput>
};


export type QueryAllEducationJsonArgs = {
  filter?: Maybe<EducationJsonFilterInput>,
  sort?: Maybe<EducationJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySkillJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  proficient?: Maybe<BooleanQueryOperatorInput>,
  show?: Maybe<BooleanQueryOperatorInput>
};


export type QueryAllSkillJsonArgs = {
  filter?: Maybe<SkillJsonFilterInput>,
  sort?: Maybe<SkillJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryLanguageJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  level?: Maybe<StringQueryOperatorInput>,
  show?: Maybe<BooleanQueryOperatorInput>
};


export type QueryAllLanguageJsonArgs = {
  filter?: Maybe<LanguageJsonFilterInput>,
  sort?: Maybe<LanguageJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryProjectJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  show?: Maybe<BooleanQueryOperatorInput>
};


export type QueryAllProjectJsonArgs = {
  filter?: Maybe<ProjectJsonFilterInput>,
  sort?: Maybe<ProjectJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type ResumeJson = Node & {
   __typename?: 'ResumeJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  fullname?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  detail?: Maybe<ResumeJsonDetail>,
  social?: Maybe<ResumeJsonSocial>,
  summary?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResumeJsonConnection = {
   __typename?: 'ResumeJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<ResumeJsonEdge>,
  nodes: Array<ResumeJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ResumeJsonGroupConnection>,
};


export type ResumeJsonConnectionDistinctArgs = {
  field: ResumeJsonFieldsEnum
};


export type ResumeJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ResumeJsonFieldsEnum
};

export type ResumeJsonDetail = {
   __typename?: 'ResumeJsonDetail',
  dateOfBirth?: Maybe<Scalars['String']>,
  place?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
};

export type ResumeJsonDetailFilterInput = {
  dateOfBirth?: Maybe<StringQueryOperatorInput>,
  place?: Maybe<StringQueryOperatorInput>,
  phone?: Maybe<StringQueryOperatorInput>,
  email?: Maybe<StringQueryOperatorInput>,
};

export type ResumeJsonEdge = {
   __typename?: 'ResumeJsonEdge',
  next?: Maybe<ResumeJson>,
  node: ResumeJson,
  previous?: Maybe<ResumeJson>,
};

export enum ResumeJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  fullname = 'fullname',
  position = 'position',
  detail___dateOfBirth = 'detail___dateOfBirth',
  detail___place = 'detail___place',
  detail___phone = 'detail___phone',
  detail___email = 'detail___email',
  social___github = 'social___github',
  social___linkedin = 'social___linkedin',
  summary = 'summary'
}

export type ResumeJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  fullname?: Maybe<StringQueryOperatorInput>,
  position?: Maybe<StringQueryOperatorInput>,
  detail?: Maybe<ResumeJsonDetailFilterInput>,
  social?: Maybe<ResumeJsonSocialFilterInput>,
  summary?: Maybe<StringQueryOperatorInput>,
};

export type ResumeJsonGroupConnection = {
   __typename?: 'ResumeJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ResumeJsonEdge>,
  nodes: Array<ResumeJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ResumeJsonSocial = {
   __typename?: 'ResumeJsonSocial',
  github?: Maybe<Scalars['String']>,
  linkedin?: Maybe<Scalars['String']>,
};

export type ResumeJsonSocialFilterInput = {
  github?: Maybe<StringQueryOperatorInput>,
  linkedin?: Maybe<StringQueryOperatorInput>,
};

export type ResumeJsonSortInput = {
  fields?: Maybe<Array<Maybe<ResumeJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Site = Node & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
   __typename?: 'SiteEdge',
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___author = 'siteMetadata___author',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  buildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
   __typename?: 'SitePage',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge',
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  path = 'path',
  internalComponentName = 'internalComponentName',
  component = 'component',
  componentChunkName = 'componentChunkName',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___postCssPlugins = 'pluginCreator___pluginOptions___postCssPlugins',
  pluginCreator___pluginOptions___postCssPlugins___prefix = 'pluginCreator___pluginOptions___postCssPlugins___prefix',
  pluginCreator___pluginOptions___postCssPlugins___important = 'pluginCreator___pluginOptions___postCssPlugins___important',
  pluginCreator___pluginOptions___postCssPlugins___separator = 'pluginCreator___pluginOptions___postCssPlugins___separator',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator___pluginOptions___background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator___pluginOptions___theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___icon = 'pluginCreator___pluginOptions___icon',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___author = 'pluginCreator___packageJson___author',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___postCssPlugins = 'pluginOptions___postCssPlugins',
  pluginOptions___postCssPlugins___prefix = 'pluginOptions___postCssPlugins___prefix',
  pluginOptions___postCssPlugins___important = 'pluginOptions___postCssPlugins___important',
  pluginOptions___postCssPlugins___separator = 'pluginOptions___postCssPlugins___separator',
  pluginOptions___postCssPlugins___variants___accessibility = 'pluginOptions___postCssPlugins___variants___accessibility',
  pluginOptions___postCssPlugins___variants___alignContent = 'pluginOptions___postCssPlugins___variants___alignContent',
  pluginOptions___postCssPlugins___variants___alignItems = 'pluginOptions___postCssPlugins___variants___alignItems',
  pluginOptions___postCssPlugins___variants___alignSelf = 'pluginOptions___postCssPlugins___variants___alignSelf',
  pluginOptions___postCssPlugins___variants___appearance = 'pluginOptions___postCssPlugins___variants___appearance',
  pluginOptions___postCssPlugins___variants___backgroundAttachment = 'pluginOptions___postCssPlugins___variants___backgroundAttachment',
  pluginOptions___postCssPlugins___variants___backgroundColor = 'pluginOptions___postCssPlugins___variants___backgroundColor',
  pluginOptions___postCssPlugins___variants___backgroundPosition = 'pluginOptions___postCssPlugins___variants___backgroundPosition',
  pluginOptions___postCssPlugins___variants___backgroundRepeat = 'pluginOptions___postCssPlugins___variants___backgroundRepeat',
  pluginOptions___postCssPlugins___variants___backgroundSize = 'pluginOptions___postCssPlugins___variants___backgroundSize',
  pluginOptions___postCssPlugins___variants___borderCollapse = 'pluginOptions___postCssPlugins___variants___borderCollapse',
  pluginOptions___postCssPlugins___variants___borderColor = 'pluginOptions___postCssPlugins___variants___borderColor',
  pluginOptions___postCssPlugins___variants___borderRadius = 'pluginOptions___postCssPlugins___variants___borderRadius',
  pluginOptions___postCssPlugins___variants___borderStyle = 'pluginOptions___postCssPlugins___variants___borderStyle',
  pluginOptions___postCssPlugins___variants___borderWidth = 'pluginOptions___postCssPlugins___variants___borderWidth',
  pluginOptions___postCssPlugins___variants___boxShadow = 'pluginOptions___postCssPlugins___variants___boxShadow',
  pluginOptions___postCssPlugins___variants___boxSizing = 'pluginOptions___postCssPlugins___variants___boxSizing',
  pluginOptions___postCssPlugins___variants___cursor = 'pluginOptions___postCssPlugins___variants___cursor',
  pluginOptions___postCssPlugins___variants___display = 'pluginOptions___postCssPlugins___variants___display',
  pluginOptions___postCssPlugins___variants___fill = 'pluginOptions___postCssPlugins___variants___fill',
  pluginOptions___postCssPlugins___variants___flex = 'pluginOptions___postCssPlugins___variants___flex',
  pluginOptions___postCssPlugins___variants___flexDirection = 'pluginOptions___postCssPlugins___variants___flexDirection',
  pluginOptions___postCssPlugins___variants___flexGrow = 'pluginOptions___postCssPlugins___variants___flexGrow',
  pluginOptions___postCssPlugins___variants___flexShrink = 'pluginOptions___postCssPlugins___variants___flexShrink',
  pluginOptions___postCssPlugins___variants___flexWrap = 'pluginOptions___postCssPlugins___variants___flexWrap',
  pluginOptions___postCssPlugins___variants___float = 'pluginOptions___postCssPlugins___variants___float',
  pluginOptions___postCssPlugins___variants___clear = 'pluginOptions___postCssPlugins___variants___clear',
  pluginOptions___postCssPlugins___variants___fontFamily = 'pluginOptions___postCssPlugins___variants___fontFamily',
  pluginOptions___postCssPlugins___variants___fontSize = 'pluginOptions___postCssPlugins___variants___fontSize',
  pluginOptions___postCssPlugins___variants___fontSmoothing = 'pluginOptions___postCssPlugins___variants___fontSmoothing',
  pluginOptions___postCssPlugins___variants___fontStyle = 'pluginOptions___postCssPlugins___variants___fontStyle',
  pluginOptions___postCssPlugins___variants___fontWeight = 'pluginOptions___postCssPlugins___variants___fontWeight',
  pluginOptions___postCssPlugins___variants___height = 'pluginOptions___postCssPlugins___variants___height',
  pluginOptions___postCssPlugins___variants___inset = 'pluginOptions___postCssPlugins___variants___inset',
  pluginOptions___postCssPlugins___variants___justifyContent = 'pluginOptions___postCssPlugins___variants___justifyContent',
  pluginOptions___postCssPlugins___variants___letterSpacing = 'pluginOptions___postCssPlugins___variants___letterSpacing',
  pluginOptions___postCssPlugins___variants___lineHeight = 'pluginOptions___postCssPlugins___variants___lineHeight',
  pluginOptions___postCssPlugins___variants___listStylePosition = 'pluginOptions___postCssPlugins___variants___listStylePosition',
  pluginOptions___postCssPlugins___variants___listStyleType = 'pluginOptions___postCssPlugins___variants___listStyleType',
  pluginOptions___postCssPlugins___variants___margin = 'pluginOptions___postCssPlugins___variants___margin',
  pluginOptions___postCssPlugins___variants___maxHeight = 'pluginOptions___postCssPlugins___variants___maxHeight',
  pluginOptions___postCssPlugins___variants___maxWidth = 'pluginOptions___postCssPlugins___variants___maxWidth',
  pluginOptions___postCssPlugins___variants___minHeight = 'pluginOptions___postCssPlugins___variants___minHeight',
  pluginOptions___postCssPlugins___variants___minWidth = 'pluginOptions___postCssPlugins___variants___minWidth',
  pluginOptions___postCssPlugins___variants___objectFit = 'pluginOptions___postCssPlugins___variants___objectFit',
  pluginOptions___postCssPlugins___variants___objectPosition = 'pluginOptions___postCssPlugins___variants___objectPosition',
  pluginOptions___postCssPlugins___variants___opacity = 'pluginOptions___postCssPlugins___variants___opacity',
  pluginOptions___postCssPlugins___variants___order = 'pluginOptions___postCssPlugins___variants___order',
  pluginOptions___postCssPlugins___variants___outline = 'pluginOptions___postCssPlugins___variants___outline',
  pluginOptions___postCssPlugins___variants___overflow = 'pluginOptions___postCssPlugins___variants___overflow',
  pluginOptions___postCssPlugins___variants___padding = 'pluginOptions___postCssPlugins___variants___padding',
  pluginOptions___postCssPlugins___variants___placeholderColor = 'pluginOptions___postCssPlugins___variants___placeholderColor',
  pluginOptions___postCssPlugins___variants___pointerEvents = 'pluginOptions___postCssPlugins___variants___pointerEvents',
  pluginOptions___postCssPlugins___variants___position = 'pluginOptions___postCssPlugins___variants___position',
  pluginOptions___postCssPlugins___variants___resize = 'pluginOptions___postCssPlugins___variants___resize',
  pluginOptions___postCssPlugins___variants___stroke = 'pluginOptions___postCssPlugins___variants___stroke',
  pluginOptions___postCssPlugins___variants___strokeWidth = 'pluginOptions___postCssPlugins___variants___strokeWidth',
  pluginOptions___postCssPlugins___variants___tableLayout = 'pluginOptions___postCssPlugins___variants___tableLayout',
  pluginOptions___postCssPlugins___variants___textAlign = 'pluginOptions___postCssPlugins___variants___textAlign',
  pluginOptions___postCssPlugins___variants___textColor = 'pluginOptions___postCssPlugins___variants___textColor',
  pluginOptions___postCssPlugins___variants___textDecoration = 'pluginOptions___postCssPlugins___variants___textDecoration',
  pluginOptions___postCssPlugins___variants___textTransform = 'pluginOptions___postCssPlugins___variants___textTransform',
  pluginOptions___postCssPlugins___variants___userSelect = 'pluginOptions___postCssPlugins___variants___userSelect',
  pluginOptions___postCssPlugins___variants___verticalAlign = 'pluginOptions___postCssPlugins___variants___verticalAlign',
  pluginOptions___postCssPlugins___variants___visibility = 'pluginOptions___postCssPlugins___variants___visibility',
  pluginOptions___postCssPlugins___variants___whitespace = 'pluginOptions___postCssPlugins___variants___whitespace',
  pluginOptions___postCssPlugins___variants___width = 'pluginOptions___postCssPlugins___variants___width',
  pluginOptions___postCssPlugins___variants___wordBreak = 'pluginOptions___postCssPlugins___variants___wordBreak',
  pluginOptions___postCssPlugins___variants___zIndex = 'pluginOptions___postCssPlugins___variants___zIndex',
  pluginOptions___postCssPlugins___variants___gap = 'pluginOptions___postCssPlugins___variants___gap',
  pluginOptions___postCssPlugins___variants___gridAutoFlow = 'pluginOptions___postCssPlugins___variants___gridAutoFlow',
  pluginOptions___postCssPlugins___variants___gridTemplateColumns = 'pluginOptions___postCssPlugins___variants___gridTemplateColumns',
  pluginOptions___postCssPlugins___variants___gridColumn = 'pluginOptions___postCssPlugins___variants___gridColumn',
  pluginOptions___postCssPlugins___variants___gridColumnStart = 'pluginOptions___postCssPlugins___variants___gridColumnStart',
  pluginOptions___postCssPlugins___variants___gridColumnEnd = 'pluginOptions___postCssPlugins___variants___gridColumnEnd',
  pluginOptions___postCssPlugins___variants___gridTemplateRows = 'pluginOptions___postCssPlugins___variants___gridTemplateRows',
  pluginOptions___postCssPlugins___variants___gridRow = 'pluginOptions___postCssPlugins___variants___gridRow',
  pluginOptions___postCssPlugins___variants___gridRowStart = 'pluginOptions___postCssPlugins___variants___gridRowStart',
  pluginOptions___postCssPlugins___variants___gridRowEnd = 'pluginOptions___postCssPlugins___variants___gridRowEnd',
  pluginOptions___postCssPlugins___variants___transform = 'pluginOptions___postCssPlugins___variants___transform',
  pluginOptions___postCssPlugins___variants___transformOrigin = 'pluginOptions___postCssPlugins___variants___transformOrigin',
  pluginOptions___postCssPlugins___variants___scale = 'pluginOptions___postCssPlugins___variants___scale',
  pluginOptions___postCssPlugins___variants___rotate = 'pluginOptions___postCssPlugins___variants___rotate',
  pluginOptions___postCssPlugins___variants___translate = 'pluginOptions___postCssPlugins___variants___translate',
  pluginOptions___postCssPlugins___variants___skew = 'pluginOptions___postCssPlugins___variants___skew',
  pluginOptions___postCssPlugins___variants___transitionProperty = 'pluginOptions___postCssPlugins___variants___transitionProperty',
  pluginOptions___postCssPlugins___variants___transitionTimingFunction = 'pluginOptions___postCssPlugins___variants___transitionTimingFunction',
  pluginOptions___postCssPlugins___variants___transitionDuration = 'pluginOptions___postCssPlugins___variants___transitionDuration',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  path?: Maybe<Scalars['String']>,
  postCssPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPostCssPlugins>>>,
  name?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  path?: Maybe<StringQueryOperatorInput>,
  postCssPlugins?: Maybe<SitePluginPluginOptionsPostCssPluginsFilterListInput>,
  name?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPlugins = {
   __typename?: 'SitePluginPluginOptionsPostCssPlugins',
  prefix?: Maybe<Scalars['String']>,
  important?: Maybe<Scalars['Boolean']>,
  separator?: Maybe<Scalars['String']>,
  theme?: Maybe<SitePluginPluginOptionsPostCssPluginsTheme>,
  variants?: Maybe<SitePluginPluginOptionsPostCssPluginsVariants>,
};

export type SitePluginPluginOptionsPostCssPluginsFilterInput = {
  prefix?: Maybe<StringQueryOperatorInput>,
  important?: Maybe<BooleanQueryOperatorInput>,
  separator?: Maybe<StringQueryOperatorInput>,
  theme?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFilterInput>,
  variants?: Maybe<SitePluginPluginOptionsPostCssPluginsVariantsFilterInput>,
};

export type SitePluginPluginOptionsPostCssPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPostCssPluginsFilterInput>,
};

export type SitePluginPluginOptionsPostCssPluginsTheme = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsTheme',
  screens?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeScreens>,
  colors?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColors>,
  spacing?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeSpacing>,
  backgroundPosition?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeBackgroundPosition>,
  backgroundSize?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeBackgroundSize>,
  borderRadius?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeBorderRadius>,
  borderWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeBorderWidth>,
  boxShadow?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeBoxShadow>,
  cursor?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeCursor>,
  fill?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFill>,
  flex?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFlex>,
  flexGrow?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFlexGrow>,
  flexShrink?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFlexShrink>,
  fontFamily?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFontFamily>,
  fontSize?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFontSize>,
  fontWeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFontWeight>,
  inset?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeInset>,
  letterSpacing?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeLetterSpacing>,
  lineHeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeLineHeight>,
  listStyleType?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeListStyleType>,
  maxHeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeMaxHeight>,
  minHeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeMinHeight>,
  minWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeMinWidth>,
  objectPosition?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeObjectPosition>,
  opacity?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeOpacity>,
  order?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeOrder>,
  stroke?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeStroke>,
  strokeWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeStrokeWidth>,
  zIndex?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeZIndex>,
  gridTemplateColumns?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridTemplateColumns>,
  gridColumn?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridColumn>,
  gridColumnStart?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridColumnStart>,
  gridColumnEnd?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridColumnEnd>,
  gridTemplateRows?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridTemplateRows>,
  gridRow?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridRow>,
  gridRowStart?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridRowStart>,
  gridRowEnd?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridRowEnd>,
  transformOrigin?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeTransformOrigin>,
  scale?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeScale>,
  rotate?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeRotate>,
  skew?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeSkew>,
  transitionProperty?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeTransitionProperty>,
  transitionTimingFunction?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeTransitionTimingFunction>,
  transitionDuration?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeTransitionDuration>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeBackgroundPosition = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeBackgroundPosition',
  bottom?: Maybe<Scalars['String']>,
  center?: Maybe<Scalars['String']>,
  left?: Maybe<Scalars['String']>,
  left_bottom?: Maybe<Scalars['String']>,
  left_top?: Maybe<Scalars['String']>,
  right?: Maybe<Scalars['String']>,
  right_bottom?: Maybe<Scalars['String']>,
  right_top?: Maybe<Scalars['String']>,
  top?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeBackgroundPositionFilterInput = {
  bottom?: Maybe<StringQueryOperatorInput>,
  center?: Maybe<StringQueryOperatorInput>,
  left?: Maybe<StringQueryOperatorInput>,
  left_bottom?: Maybe<StringQueryOperatorInput>,
  left_top?: Maybe<StringQueryOperatorInput>,
  right?: Maybe<StringQueryOperatorInput>,
  right_bottom?: Maybe<StringQueryOperatorInput>,
  right_top?: Maybe<StringQueryOperatorInput>,
  top?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeBackgroundSize = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeBackgroundSize',
  auto?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  contain?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeBackgroundSizeFilterInput = {
  auto?: Maybe<StringQueryOperatorInput>,
  cover?: Maybe<StringQueryOperatorInput>,
  contain?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeBorderRadius = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeBorderRadius',
  none?: Maybe<Scalars['String']>,
  sm?: Maybe<Scalars['String']>,
  default?: Maybe<Scalars['String']>,
  md?: Maybe<Scalars['String']>,
  lg?: Maybe<Scalars['String']>,
  full?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeBorderRadiusFilterInput = {
  none?: Maybe<StringQueryOperatorInput>,
  sm?: Maybe<StringQueryOperatorInput>,
  default?: Maybe<StringQueryOperatorInput>,
  md?: Maybe<StringQueryOperatorInput>,
  lg?: Maybe<StringQueryOperatorInput>,
  full?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeBorderWidth = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeBorderWidth',
  _0?: Maybe<Scalars['String']>,
  _2?: Maybe<Scalars['String']>,
  _4?: Maybe<Scalars['String']>,
  _8?: Maybe<Scalars['String']>,
  default?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeBorderWidthFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  _2?: Maybe<StringQueryOperatorInput>,
  _4?: Maybe<StringQueryOperatorInput>,
  _8?: Maybe<StringQueryOperatorInput>,
  default?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeBoxShadow = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeBoxShadow',
  xs?: Maybe<Scalars['String']>,
  sm?: Maybe<Scalars['String']>,
  default?: Maybe<Scalars['String']>,
  md?: Maybe<Scalars['String']>,
  lg?: Maybe<Scalars['String']>,
  xl?: Maybe<Scalars['String']>,
  _2xl?: Maybe<Scalars['String']>,
  inner?: Maybe<Scalars['String']>,
  outline?: Maybe<Scalars['String']>,
  none?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeBoxShadowFilterInput = {
  xs?: Maybe<StringQueryOperatorInput>,
  sm?: Maybe<StringQueryOperatorInput>,
  default?: Maybe<StringQueryOperatorInput>,
  md?: Maybe<StringQueryOperatorInput>,
  lg?: Maybe<StringQueryOperatorInput>,
  xl?: Maybe<StringQueryOperatorInput>,
  _2xl?: Maybe<StringQueryOperatorInput>,
  inner?: Maybe<StringQueryOperatorInput>,
  outline?: Maybe<StringQueryOperatorInput>,
  none?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColors = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeColors',
  transparent?: Maybe<Scalars['String']>,
  black?: Maybe<Scalars['String']>,
  white?: Maybe<Scalars['String']>,
  gray?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsGray>,
  red?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsRed>,
  orange?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsOrange>,
  yellow?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsYellow>,
  green?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsGreen>,
  teal?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsTeal>,
  blue?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsBlue>,
  indigo?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsIndigo>,
  purple?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsPurple>,
  pink?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsPink>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsBlue = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeColorsBlue',
  _100?: Maybe<Scalars['String']>,
  _200?: Maybe<Scalars['String']>,
  _300?: Maybe<Scalars['String']>,
  _400?: Maybe<Scalars['String']>,
  _500?: Maybe<Scalars['String']>,
  _600?: Maybe<Scalars['String']>,
  _700?: Maybe<Scalars['String']>,
  _800?: Maybe<Scalars['String']>,
  _900?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsBlueFilterInput = {
  _100?: Maybe<StringQueryOperatorInput>,
  _200?: Maybe<StringQueryOperatorInput>,
  _300?: Maybe<StringQueryOperatorInput>,
  _400?: Maybe<StringQueryOperatorInput>,
  _500?: Maybe<StringQueryOperatorInput>,
  _600?: Maybe<StringQueryOperatorInput>,
  _700?: Maybe<StringQueryOperatorInput>,
  _800?: Maybe<StringQueryOperatorInput>,
  _900?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsFilterInput = {
  transparent?: Maybe<StringQueryOperatorInput>,
  black?: Maybe<StringQueryOperatorInput>,
  white?: Maybe<StringQueryOperatorInput>,
  gray?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsGrayFilterInput>,
  red?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsRedFilterInput>,
  orange?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsOrangeFilterInput>,
  yellow?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsYellowFilterInput>,
  green?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsGreenFilterInput>,
  teal?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsTealFilterInput>,
  blue?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsBlueFilterInput>,
  indigo?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsIndigoFilterInput>,
  purple?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsPurpleFilterInput>,
  pink?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsPinkFilterInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsGray = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeColorsGray',
  _100?: Maybe<Scalars['String']>,
  _200?: Maybe<Scalars['String']>,
  _300?: Maybe<Scalars['String']>,
  _400?: Maybe<Scalars['String']>,
  _500?: Maybe<Scalars['String']>,
  _600?: Maybe<Scalars['String']>,
  _700?: Maybe<Scalars['String']>,
  _800?: Maybe<Scalars['String']>,
  _900?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsGrayFilterInput = {
  _100?: Maybe<StringQueryOperatorInput>,
  _200?: Maybe<StringQueryOperatorInput>,
  _300?: Maybe<StringQueryOperatorInput>,
  _400?: Maybe<StringQueryOperatorInput>,
  _500?: Maybe<StringQueryOperatorInput>,
  _600?: Maybe<StringQueryOperatorInput>,
  _700?: Maybe<StringQueryOperatorInput>,
  _800?: Maybe<StringQueryOperatorInput>,
  _900?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsGreen = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeColorsGreen',
  _100?: Maybe<Scalars['String']>,
  _200?: Maybe<Scalars['String']>,
  _300?: Maybe<Scalars['String']>,
  _400?: Maybe<Scalars['String']>,
  _500?: Maybe<Scalars['String']>,
  _600?: Maybe<Scalars['String']>,
  _700?: Maybe<Scalars['String']>,
  _800?: Maybe<Scalars['String']>,
  _900?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsGreenFilterInput = {
  _100?: Maybe<StringQueryOperatorInput>,
  _200?: Maybe<StringQueryOperatorInput>,
  _300?: Maybe<StringQueryOperatorInput>,
  _400?: Maybe<StringQueryOperatorInput>,
  _500?: Maybe<StringQueryOperatorInput>,
  _600?: Maybe<StringQueryOperatorInput>,
  _700?: Maybe<StringQueryOperatorInput>,
  _800?: Maybe<StringQueryOperatorInput>,
  _900?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsIndigo = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeColorsIndigo',
  _100?: Maybe<Scalars['String']>,
  _200?: Maybe<Scalars['String']>,
  _300?: Maybe<Scalars['String']>,
  _400?: Maybe<Scalars['String']>,
  _500?: Maybe<Scalars['String']>,
  _600?: Maybe<Scalars['String']>,
  _700?: Maybe<Scalars['String']>,
  _800?: Maybe<Scalars['String']>,
  _900?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsIndigoFilterInput = {
  _100?: Maybe<StringQueryOperatorInput>,
  _200?: Maybe<StringQueryOperatorInput>,
  _300?: Maybe<StringQueryOperatorInput>,
  _400?: Maybe<StringQueryOperatorInput>,
  _500?: Maybe<StringQueryOperatorInput>,
  _600?: Maybe<StringQueryOperatorInput>,
  _700?: Maybe<StringQueryOperatorInput>,
  _800?: Maybe<StringQueryOperatorInput>,
  _900?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsOrange = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeColorsOrange',
  _100?: Maybe<Scalars['String']>,
  _200?: Maybe<Scalars['String']>,
  _300?: Maybe<Scalars['String']>,
  _400?: Maybe<Scalars['String']>,
  _500?: Maybe<Scalars['String']>,
  _600?: Maybe<Scalars['String']>,
  _700?: Maybe<Scalars['String']>,
  _800?: Maybe<Scalars['String']>,
  _900?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsOrangeFilterInput = {
  _100?: Maybe<StringQueryOperatorInput>,
  _200?: Maybe<StringQueryOperatorInput>,
  _300?: Maybe<StringQueryOperatorInput>,
  _400?: Maybe<StringQueryOperatorInput>,
  _500?: Maybe<StringQueryOperatorInput>,
  _600?: Maybe<StringQueryOperatorInput>,
  _700?: Maybe<StringQueryOperatorInput>,
  _800?: Maybe<StringQueryOperatorInput>,
  _900?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsPink = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeColorsPink',
  _100?: Maybe<Scalars['String']>,
  _200?: Maybe<Scalars['String']>,
  _300?: Maybe<Scalars['String']>,
  _400?: Maybe<Scalars['String']>,
  _500?: Maybe<Scalars['String']>,
  _600?: Maybe<Scalars['String']>,
  _700?: Maybe<Scalars['String']>,
  _800?: Maybe<Scalars['String']>,
  _900?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsPinkFilterInput = {
  _100?: Maybe<StringQueryOperatorInput>,
  _200?: Maybe<StringQueryOperatorInput>,
  _300?: Maybe<StringQueryOperatorInput>,
  _400?: Maybe<StringQueryOperatorInput>,
  _500?: Maybe<StringQueryOperatorInput>,
  _600?: Maybe<StringQueryOperatorInput>,
  _700?: Maybe<StringQueryOperatorInput>,
  _800?: Maybe<StringQueryOperatorInput>,
  _900?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsPurple = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeColorsPurple',
  _100?: Maybe<Scalars['String']>,
  _200?: Maybe<Scalars['String']>,
  _300?: Maybe<Scalars['String']>,
  _400?: Maybe<Scalars['String']>,
  _500?: Maybe<Scalars['String']>,
  _600?: Maybe<Scalars['String']>,
  _700?: Maybe<Scalars['String']>,
  _800?: Maybe<Scalars['String']>,
  _900?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsPurpleFilterInput = {
  _100?: Maybe<StringQueryOperatorInput>,
  _200?: Maybe<StringQueryOperatorInput>,
  _300?: Maybe<StringQueryOperatorInput>,
  _400?: Maybe<StringQueryOperatorInput>,
  _500?: Maybe<StringQueryOperatorInput>,
  _600?: Maybe<StringQueryOperatorInput>,
  _700?: Maybe<StringQueryOperatorInput>,
  _800?: Maybe<StringQueryOperatorInput>,
  _900?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsRed = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeColorsRed',
  _100?: Maybe<Scalars['String']>,
  _200?: Maybe<Scalars['String']>,
  _300?: Maybe<Scalars['String']>,
  _400?: Maybe<Scalars['String']>,
  _500?: Maybe<Scalars['String']>,
  _600?: Maybe<Scalars['String']>,
  _700?: Maybe<Scalars['String']>,
  _800?: Maybe<Scalars['String']>,
  _900?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsRedFilterInput = {
  _100?: Maybe<StringQueryOperatorInput>,
  _200?: Maybe<StringQueryOperatorInput>,
  _300?: Maybe<StringQueryOperatorInput>,
  _400?: Maybe<StringQueryOperatorInput>,
  _500?: Maybe<StringQueryOperatorInput>,
  _600?: Maybe<StringQueryOperatorInput>,
  _700?: Maybe<StringQueryOperatorInput>,
  _800?: Maybe<StringQueryOperatorInput>,
  _900?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsTeal = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeColorsTeal',
  _100?: Maybe<Scalars['String']>,
  _200?: Maybe<Scalars['String']>,
  _300?: Maybe<Scalars['String']>,
  _400?: Maybe<Scalars['String']>,
  _500?: Maybe<Scalars['String']>,
  _600?: Maybe<Scalars['String']>,
  _700?: Maybe<Scalars['String']>,
  _800?: Maybe<Scalars['String']>,
  _900?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsTealFilterInput = {
  _100?: Maybe<StringQueryOperatorInput>,
  _200?: Maybe<StringQueryOperatorInput>,
  _300?: Maybe<StringQueryOperatorInput>,
  _400?: Maybe<StringQueryOperatorInput>,
  _500?: Maybe<StringQueryOperatorInput>,
  _600?: Maybe<StringQueryOperatorInput>,
  _700?: Maybe<StringQueryOperatorInput>,
  _800?: Maybe<StringQueryOperatorInput>,
  _900?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsYellow = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeColorsYellow',
  _100?: Maybe<Scalars['String']>,
  _200?: Maybe<Scalars['String']>,
  _300?: Maybe<Scalars['String']>,
  _400?: Maybe<Scalars['String']>,
  _500?: Maybe<Scalars['String']>,
  _600?: Maybe<Scalars['String']>,
  _700?: Maybe<Scalars['String']>,
  _800?: Maybe<Scalars['String']>,
  _900?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeColorsYellowFilterInput = {
  _100?: Maybe<StringQueryOperatorInput>,
  _200?: Maybe<StringQueryOperatorInput>,
  _300?: Maybe<StringQueryOperatorInput>,
  _400?: Maybe<StringQueryOperatorInput>,
  _500?: Maybe<StringQueryOperatorInput>,
  _600?: Maybe<StringQueryOperatorInput>,
  _700?: Maybe<StringQueryOperatorInput>,
  _800?: Maybe<StringQueryOperatorInput>,
  _900?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeCursor = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeCursor',
  auto?: Maybe<Scalars['String']>,
  default?: Maybe<Scalars['String']>,
  pointer?: Maybe<Scalars['String']>,
  wait?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  move?: Maybe<Scalars['String']>,
  not_allowed?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeCursorFilterInput = {
  auto?: Maybe<StringQueryOperatorInput>,
  default?: Maybe<StringQueryOperatorInput>,
  pointer?: Maybe<StringQueryOperatorInput>,
  wait?: Maybe<StringQueryOperatorInput>,
  text?: Maybe<StringQueryOperatorInput>,
  move?: Maybe<StringQueryOperatorInput>,
  not_allowed?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFill = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeFill',
  current?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFillFilterInput = {
  current?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFilterInput = {
  screens?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeScreensFilterInput>,
  colors?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeColorsFilterInput>,
  spacing?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeSpacingFilterInput>,
  backgroundPosition?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeBackgroundPositionFilterInput>,
  backgroundSize?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeBackgroundSizeFilterInput>,
  borderRadius?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeBorderRadiusFilterInput>,
  borderWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeBorderWidthFilterInput>,
  boxShadow?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeBoxShadowFilterInput>,
  cursor?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeCursorFilterInput>,
  fill?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFillFilterInput>,
  flex?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFlexFilterInput>,
  flexGrow?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFlexGrowFilterInput>,
  flexShrink?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFlexShrinkFilterInput>,
  fontFamily?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFontFamilyFilterInput>,
  fontSize?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFontSizeFilterInput>,
  fontWeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFontWeightFilterInput>,
  inset?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeInsetFilterInput>,
  letterSpacing?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeLetterSpacingFilterInput>,
  lineHeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeLineHeightFilterInput>,
  listStyleType?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeListStyleTypeFilterInput>,
  maxHeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeMaxHeightFilterInput>,
  minHeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeMinHeightFilterInput>,
  minWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeMinWidthFilterInput>,
  objectPosition?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeObjectPositionFilterInput>,
  opacity?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeOpacityFilterInput>,
  order?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeOrderFilterInput>,
  stroke?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeStrokeFilterInput>,
  strokeWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeStrokeWidthFilterInput>,
  zIndex?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeZIndexFilterInput>,
  gridTemplateColumns?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridTemplateColumnsFilterInput>,
  gridColumn?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridColumnFilterInput>,
  gridColumnStart?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridColumnStartFilterInput>,
  gridColumnEnd?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridColumnEndFilterInput>,
  gridTemplateRows?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridTemplateRowsFilterInput>,
  gridRow?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridRowFilterInput>,
  gridRowStart?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridRowStartFilterInput>,
  gridRowEnd?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeGridRowEndFilterInput>,
  transformOrigin?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeTransformOriginFilterInput>,
  scale?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeScaleFilterInput>,
  rotate?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeRotateFilterInput>,
  skew?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeSkewFilterInput>,
  transitionProperty?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeTransitionPropertyFilterInput>,
  transitionTimingFunction?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeTransitionTimingFunctionFilterInput>,
  transitionDuration?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeTransitionDurationFilterInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFlex = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeFlex',
  _1?: Maybe<Scalars['String']>,
  auto?: Maybe<Scalars['String']>,
  initial?: Maybe<Scalars['String']>,
  none?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFlexFilterInput = {
  _1?: Maybe<StringQueryOperatorInput>,
  auto?: Maybe<StringQueryOperatorInput>,
  initial?: Maybe<StringQueryOperatorInput>,
  none?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFlexGrow = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeFlexGrow',
  _0?: Maybe<Scalars['String']>,
  default?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFlexGrowFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  default?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFlexShrink = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeFlexShrink',
  _0?: Maybe<Scalars['String']>,
  default?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFlexShrinkFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  default?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFontFamily = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeFontFamily',
  sans?: Maybe<Array<Maybe<Scalars['String']>>>,
  serif?: Maybe<Array<Maybe<Scalars['String']>>>,
  mono?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFontFamilyFilterInput = {
  sans?: Maybe<StringQueryOperatorInput>,
  serif?: Maybe<StringQueryOperatorInput>,
  mono?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFontSize = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeFontSize',
  xs?: Maybe<Scalars['String']>,
  sm?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  lg?: Maybe<Scalars['String']>,
  xl?: Maybe<Scalars['String']>,
  _2xl?: Maybe<Scalars['String']>,
  _3xl?: Maybe<Scalars['String']>,
  _4xl?: Maybe<Scalars['String']>,
  _5xl?: Maybe<Scalars['String']>,
  _6xl?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFontSizeFilterInput = {
  xs?: Maybe<StringQueryOperatorInput>,
  sm?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  lg?: Maybe<StringQueryOperatorInput>,
  xl?: Maybe<StringQueryOperatorInput>,
  _2xl?: Maybe<StringQueryOperatorInput>,
  _3xl?: Maybe<StringQueryOperatorInput>,
  _4xl?: Maybe<StringQueryOperatorInput>,
  _5xl?: Maybe<StringQueryOperatorInput>,
  _6xl?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFontWeight = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeFontWeight',
  hairline?: Maybe<Scalars['String']>,
  thin?: Maybe<Scalars['String']>,
  light?: Maybe<Scalars['String']>,
  normal?: Maybe<Scalars['String']>,
  medium?: Maybe<Scalars['String']>,
  semibold?: Maybe<Scalars['String']>,
  bold?: Maybe<Scalars['String']>,
  extrabold?: Maybe<Scalars['String']>,
  black?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeFontWeightFilterInput = {
  hairline?: Maybe<StringQueryOperatorInput>,
  thin?: Maybe<StringQueryOperatorInput>,
  light?: Maybe<StringQueryOperatorInput>,
  normal?: Maybe<StringQueryOperatorInput>,
  medium?: Maybe<StringQueryOperatorInput>,
  semibold?: Maybe<StringQueryOperatorInput>,
  bold?: Maybe<StringQueryOperatorInput>,
  extrabold?: Maybe<StringQueryOperatorInput>,
  black?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridColumn = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeGridColumn',
  auto?: Maybe<Scalars['String']>,
  span_1?: Maybe<Scalars['String']>,
  span_2?: Maybe<Scalars['String']>,
  span_3?: Maybe<Scalars['String']>,
  span_4?: Maybe<Scalars['String']>,
  span_5?: Maybe<Scalars['String']>,
  span_6?: Maybe<Scalars['String']>,
  span_7?: Maybe<Scalars['String']>,
  span_8?: Maybe<Scalars['String']>,
  span_9?: Maybe<Scalars['String']>,
  span_10?: Maybe<Scalars['String']>,
  span_11?: Maybe<Scalars['String']>,
  span_12?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridColumnEnd = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeGridColumnEnd',
  _1?: Maybe<Scalars['String']>,
  _2?: Maybe<Scalars['String']>,
  _3?: Maybe<Scalars['String']>,
  _4?: Maybe<Scalars['String']>,
  _5?: Maybe<Scalars['String']>,
  _6?: Maybe<Scalars['String']>,
  _7?: Maybe<Scalars['String']>,
  _8?: Maybe<Scalars['String']>,
  _9?: Maybe<Scalars['String']>,
  _10?: Maybe<Scalars['String']>,
  _11?: Maybe<Scalars['String']>,
  _12?: Maybe<Scalars['String']>,
  _13?: Maybe<Scalars['String']>,
  auto?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridColumnEndFilterInput = {
  _1?: Maybe<StringQueryOperatorInput>,
  _2?: Maybe<StringQueryOperatorInput>,
  _3?: Maybe<StringQueryOperatorInput>,
  _4?: Maybe<StringQueryOperatorInput>,
  _5?: Maybe<StringQueryOperatorInput>,
  _6?: Maybe<StringQueryOperatorInput>,
  _7?: Maybe<StringQueryOperatorInput>,
  _8?: Maybe<StringQueryOperatorInput>,
  _9?: Maybe<StringQueryOperatorInput>,
  _10?: Maybe<StringQueryOperatorInput>,
  _11?: Maybe<StringQueryOperatorInput>,
  _12?: Maybe<StringQueryOperatorInput>,
  _13?: Maybe<StringQueryOperatorInput>,
  auto?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridColumnFilterInput = {
  auto?: Maybe<StringQueryOperatorInput>,
  span_1?: Maybe<StringQueryOperatorInput>,
  span_2?: Maybe<StringQueryOperatorInput>,
  span_3?: Maybe<StringQueryOperatorInput>,
  span_4?: Maybe<StringQueryOperatorInput>,
  span_5?: Maybe<StringQueryOperatorInput>,
  span_6?: Maybe<StringQueryOperatorInput>,
  span_7?: Maybe<StringQueryOperatorInput>,
  span_8?: Maybe<StringQueryOperatorInput>,
  span_9?: Maybe<StringQueryOperatorInput>,
  span_10?: Maybe<StringQueryOperatorInput>,
  span_11?: Maybe<StringQueryOperatorInput>,
  span_12?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridColumnStart = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeGridColumnStart',
  _1?: Maybe<Scalars['String']>,
  _2?: Maybe<Scalars['String']>,
  _3?: Maybe<Scalars['String']>,
  _4?: Maybe<Scalars['String']>,
  _5?: Maybe<Scalars['String']>,
  _6?: Maybe<Scalars['String']>,
  _7?: Maybe<Scalars['String']>,
  _8?: Maybe<Scalars['String']>,
  _9?: Maybe<Scalars['String']>,
  _10?: Maybe<Scalars['String']>,
  _11?: Maybe<Scalars['String']>,
  _12?: Maybe<Scalars['String']>,
  _13?: Maybe<Scalars['String']>,
  auto?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridColumnStartFilterInput = {
  _1?: Maybe<StringQueryOperatorInput>,
  _2?: Maybe<StringQueryOperatorInput>,
  _3?: Maybe<StringQueryOperatorInput>,
  _4?: Maybe<StringQueryOperatorInput>,
  _5?: Maybe<StringQueryOperatorInput>,
  _6?: Maybe<StringQueryOperatorInput>,
  _7?: Maybe<StringQueryOperatorInput>,
  _8?: Maybe<StringQueryOperatorInput>,
  _9?: Maybe<StringQueryOperatorInput>,
  _10?: Maybe<StringQueryOperatorInput>,
  _11?: Maybe<StringQueryOperatorInput>,
  _12?: Maybe<StringQueryOperatorInput>,
  _13?: Maybe<StringQueryOperatorInput>,
  auto?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridRow = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeGridRow',
  auto?: Maybe<Scalars['String']>,
  span_1?: Maybe<Scalars['String']>,
  span_2?: Maybe<Scalars['String']>,
  span_3?: Maybe<Scalars['String']>,
  span_4?: Maybe<Scalars['String']>,
  span_5?: Maybe<Scalars['String']>,
  span_6?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridRowEnd = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeGridRowEnd',
  _1?: Maybe<Scalars['String']>,
  _2?: Maybe<Scalars['String']>,
  _3?: Maybe<Scalars['String']>,
  _4?: Maybe<Scalars['String']>,
  _5?: Maybe<Scalars['String']>,
  _6?: Maybe<Scalars['String']>,
  _7?: Maybe<Scalars['String']>,
  auto?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridRowEndFilterInput = {
  _1?: Maybe<StringQueryOperatorInput>,
  _2?: Maybe<StringQueryOperatorInput>,
  _3?: Maybe<StringQueryOperatorInput>,
  _4?: Maybe<StringQueryOperatorInput>,
  _5?: Maybe<StringQueryOperatorInput>,
  _6?: Maybe<StringQueryOperatorInput>,
  _7?: Maybe<StringQueryOperatorInput>,
  auto?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridRowFilterInput = {
  auto?: Maybe<StringQueryOperatorInput>,
  span_1?: Maybe<StringQueryOperatorInput>,
  span_2?: Maybe<StringQueryOperatorInput>,
  span_3?: Maybe<StringQueryOperatorInput>,
  span_4?: Maybe<StringQueryOperatorInput>,
  span_5?: Maybe<StringQueryOperatorInput>,
  span_6?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridRowStart = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeGridRowStart',
  _1?: Maybe<Scalars['String']>,
  _2?: Maybe<Scalars['String']>,
  _3?: Maybe<Scalars['String']>,
  _4?: Maybe<Scalars['String']>,
  _5?: Maybe<Scalars['String']>,
  _6?: Maybe<Scalars['String']>,
  _7?: Maybe<Scalars['String']>,
  auto?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridRowStartFilterInput = {
  _1?: Maybe<StringQueryOperatorInput>,
  _2?: Maybe<StringQueryOperatorInput>,
  _3?: Maybe<StringQueryOperatorInput>,
  _4?: Maybe<StringQueryOperatorInput>,
  _5?: Maybe<StringQueryOperatorInput>,
  _6?: Maybe<StringQueryOperatorInput>,
  _7?: Maybe<StringQueryOperatorInput>,
  auto?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridTemplateColumns = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeGridTemplateColumns',
  _1?: Maybe<Scalars['String']>,
  _2?: Maybe<Scalars['String']>,
  _3?: Maybe<Scalars['String']>,
  _4?: Maybe<Scalars['String']>,
  _5?: Maybe<Scalars['String']>,
  _6?: Maybe<Scalars['String']>,
  _7?: Maybe<Scalars['String']>,
  _8?: Maybe<Scalars['String']>,
  _9?: Maybe<Scalars['String']>,
  _10?: Maybe<Scalars['String']>,
  _11?: Maybe<Scalars['String']>,
  _12?: Maybe<Scalars['String']>,
  none?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridTemplateColumnsFilterInput = {
  _1?: Maybe<StringQueryOperatorInput>,
  _2?: Maybe<StringQueryOperatorInput>,
  _3?: Maybe<StringQueryOperatorInput>,
  _4?: Maybe<StringQueryOperatorInput>,
  _5?: Maybe<StringQueryOperatorInput>,
  _6?: Maybe<StringQueryOperatorInput>,
  _7?: Maybe<StringQueryOperatorInput>,
  _8?: Maybe<StringQueryOperatorInput>,
  _9?: Maybe<StringQueryOperatorInput>,
  _10?: Maybe<StringQueryOperatorInput>,
  _11?: Maybe<StringQueryOperatorInput>,
  _12?: Maybe<StringQueryOperatorInput>,
  none?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridTemplateRows = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeGridTemplateRows',
  _1?: Maybe<Scalars['String']>,
  _2?: Maybe<Scalars['String']>,
  _3?: Maybe<Scalars['String']>,
  _4?: Maybe<Scalars['String']>,
  _5?: Maybe<Scalars['String']>,
  _6?: Maybe<Scalars['String']>,
  none?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeGridTemplateRowsFilterInput = {
  _1?: Maybe<StringQueryOperatorInput>,
  _2?: Maybe<StringQueryOperatorInput>,
  _3?: Maybe<StringQueryOperatorInput>,
  _4?: Maybe<StringQueryOperatorInput>,
  _5?: Maybe<StringQueryOperatorInput>,
  _6?: Maybe<StringQueryOperatorInput>,
  none?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeInset = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeInset',
  _0?: Maybe<Scalars['String']>,
  auto?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeInsetFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  auto?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeLetterSpacing = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeLetterSpacing',
  tighter?: Maybe<Scalars['String']>,
  tight?: Maybe<Scalars['String']>,
  normal?: Maybe<Scalars['String']>,
  wide?: Maybe<Scalars['String']>,
  wider?: Maybe<Scalars['String']>,
  widest?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeLetterSpacingFilterInput = {
  tighter?: Maybe<StringQueryOperatorInput>,
  tight?: Maybe<StringQueryOperatorInput>,
  normal?: Maybe<StringQueryOperatorInput>,
  wide?: Maybe<StringQueryOperatorInput>,
  wider?: Maybe<StringQueryOperatorInput>,
  widest?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeLineHeight = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeLineHeight',
  _3?: Maybe<Scalars['String']>,
  _4?: Maybe<Scalars['String']>,
  _5?: Maybe<Scalars['String']>,
  _6?: Maybe<Scalars['String']>,
  _7?: Maybe<Scalars['String']>,
  _8?: Maybe<Scalars['String']>,
  _9?: Maybe<Scalars['String']>,
  _10?: Maybe<Scalars['String']>,
  none?: Maybe<Scalars['String']>,
  tight?: Maybe<Scalars['String']>,
  snug?: Maybe<Scalars['String']>,
  normal?: Maybe<Scalars['String']>,
  relaxed?: Maybe<Scalars['String']>,
  loose?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeLineHeightFilterInput = {
  _3?: Maybe<StringQueryOperatorInput>,
  _4?: Maybe<StringQueryOperatorInput>,
  _5?: Maybe<StringQueryOperatorInput>,
  _6?: Maybe<StringQueryOperatorInput>,
  _7?: Maybe<StringQueryOperatorInput>,
  _8?: Maybe<StringQueryOperatorInput>,
  _9?: Maybe<StringQueryOperatorInput>,
  _10?: Maybe<StringQueryOperatorInput>,
  none?: Maybe<StringQueryOperatorInput>,
  tight?: Maybe<StringQueryOperatorInput>,
  snug?: Maybe<StringQueryOperatorInput>,
  normal?: Maybe<StringQueryOperatorInput>,
  relaxed?: Maybe<StringQueryOperatorInput>,
  loose?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeListStyleType = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeListStyleType',
  none?: Maybe<Scalars['String']>,
  disc?: Maybe<Scalars['String']>,
  decimal?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeListStyleTypeFilterInput = {
  none?: Maybe<StringQueryOperatorInput>,
  disc?: Maybe<StringQueryOperatorInput>,
  decimal?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeMaxHeight = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeMaxHeight',
  full?: Maybe<Scalars['String']>,
  screen?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeMaxHeightFilterInput = {
  full?: Maybe<StringQueryOperatorInput>,
  screen?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeMinHeight = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeMinHeight',
  _0?: Maybe<Scalars['String']>,
  full?: Maybe<Scalars['String']>,
  screen?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeMinHeightFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  full?: Maybe<StringQueryOperatorInput>,
  screen?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeMinWidth = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeMinWidth',
  _0?: Maybe<Scalars['String']>,
  full?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeMinWidthFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  full?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeObjectPosition = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeObjectPosition',
  bottom?: Maybe<Scalars['String']>,
  center?: Maybe<Scalars['String']>,
  left?: Maybe<Scalars['String']>,
  left_bottom?: Maybe<Scalars['String']>,
  left_top?: Maybe<Scalars['String']>,
  right?: Maybe<Scalars['String']>,
  right_bottom?: Maybe<Scalars['String']>,
  right_top?: Maybe<Scalars['String']>,
  top?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeObjectPositionFilterInput = {
  bottom?: Maybe<StringQueryOperatorInput>,
  center?: Maybe<StringQueryOperatorInput>,
  left?: Maybe<StringQueryOperatorInput>,
  left_bottom?: Maybe<StringQueryOperatorInput>,
  left_top?: Maybe<StringQueryOperatorInput>,
  right?: Maybe<StringQueryOperatorInput>,
  right_bottom?: Maybe<StringQueryOperatorInput>,
  right_top?: Maybe<StringQueryOperatorInput>,
  top?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeOpacity = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeOpacity',
  _0?: Maybe<Scalars['String']>,
  _25?: Maybe<Scalars['String']>,
  _50?: Maybe<Scalars['String']>,
  _75?: Maybe<Scalars['String']>,
  _100?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeOpacityFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  _25?: Maybe<StringQueryOperatorInput>,
  _50?: Maybe<StringQueryOperatorInput>,
  _75?: Maybe<StringQueryOperatorInput>,
  _100?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeOrder = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeOrder',
  _1?: Maybe<Scalars['String']>,
  _2?: Maybe<Scalars['String']>,
  _3?: Maybe<Scalars['String']>,
  _4?: Maybe<Scalars['String']>,
  _5?: Maybe<Scalars['String']>,
  _6?: Maybe<Scalars['String']>,
  _7?: Maybe<Scalars['String']>,
  _8?: Maybe<Scalars['String']>,
  _9?: Maybe<Scalars['String']>,
  _10?: Maybe<Scalars['String']>,
  _11?: Maybe<Scalars['String']>,
  _12?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Date']>,
  none?: Maybe<Scalars['String']>,
};


export type SitePluginPluginOptionsPostCssPluginsThemeOrderLastArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SitePluginPluginOptionsPostCssPluginsThemeOrderFilterInput = {
  _1?: Maybe<StringQueryOperatorInput>,
  _2?: Maybe<StringQueryOperatorInput>,
  _3?: Maybe<StringQueryOperatorInput>,
  _4?: Maybe<StringQueryOperatorInput>,
  _5?: Maybe<StringQueryOperatorInput>,
  _6?: Maybe<StringQueryOperatorInput>,
  _7?: Maybe<StringQueryOperatorInput>,
  _8?: Maybe<StringQueryOperatorInput>,
  _9?: Maybe<StringQueryOperatorInput>,
  _10?: Maybe<StringQueryOperatorInput>,
  _11?: Maybe<StringQueryOperatorInput>,
  _12?: Maybe<StringQueryOperatorInput>,
  first?: Maybe<StringQueryOperatorInput>,
  last?: Maybe<DateQueryOperatorInput>,
  none?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeRotate = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeRotate',
  _0?: Maybe<Scalars['String']>,
  _45?: Maybe<Scalars['String']>,
  _90?: Maybe<Scalars['String']>,
  _180?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeRotateFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  _45?: Maybe<StringQueryOperatorInput>,
  _90?: Maybe<StringQueryOperatorInput>,
  _180?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeScale = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeScale',
  _0?: Maybe<Scalars['String']>,
  _50?: Maybe<Scalars['String']>,
  _75?: Maybe<Scalars['String']>,
  _90?: Maybe<Scalars['String']>,
  _95?: Maybe<Scalars['String']>,
  _100?: Maybe<Scalars['String']>,
  _105?: Maybe<Scalars['String']>,
  _110?: Maybe<Scalars['String']>,
  _125?: Maybe<Scalars['String']>,
  _150?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeScaleFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  _50?: Maybe<StringQueryOperatorInput>,
  _75?: Maybe<StringQueryOperatorInput>,
  _90?: Maybe<StringQueryOperatorInput>,
  _95?: Maybe<StringQueryOperatorInput>,
  _100?: Maybe<StringQueryOperatorInput>,
  _105?: Maybe<StringQueryOperatorInput>,
  _110?: Maybe<StringQueryOperatorInput>,
  _125?: Maybe<StringQueryOperatorInput>,
  _150?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeScreens = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeScreens',
  sm?: Maybe<Scalars['String']>,
  md?: Maybe<Scalars['String']>,
  lg?: Maybe<Scalars['String']>,
  xl?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeScreensFilterInput = {
  sm?: Maybe<StringQueryOperatorInput>,
  md?: Maybe<StringQueryOperatorInput>,
  lg?: Maybe<StringQueryOperatorInput>,
  xl?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeSkew = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeSkew',
  _0?: Maybe<Scalars['String']>,
  _3?: Maybe<Scalars['String']>,
  _6?: Maybe<Scalars['String']>,
  _12?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeSkewFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  _3?: Maybe<StringQueryOperatorInput>,
  _6?: Maybe<StringQueryOperatorInput>,
  _12?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeSpacing = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeSpacing',
  _0?: Maybe<Scalars['String']>,
  _1?: Maybe<Scalars['String']>,
  _2?: Maybe<Scalars['String']>,
  _3?: Maybe<Scalars['String']>,
  _4?: Maybe<Scalars['String']>,
  _5?: Maybe<Scalars['String']>,
  _6?: Maybe<Scalars['String']>,
  _8?: Maybe<Scalars['String']>,
  _10?: Maybe<Scalars['String']>,
  _12?: Maybe<Scalars['String']>,
  _16?: Maybe<Scalars['String']>,
  _20?: Maybe<Scalars['String']>,
  _24?: Maybe<Scalars['String']>,
  _32?: Maybe<Scalars['String']>,
  _40?: Maybe<Scalars['String']>,
  _48?: Maybe<Scalars['String']>,
  _56?: Maybe<Scalars['String']>,
  _64?: Maybe<Scalars['String']>,
  px?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeSpacingFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  _1?: Maybe<StringQueryOperatorInput>,
  _2?: Maybe<StringQueryOperatorInput>,
  _3?: Maybe<StringQueryOperatorInput>,
  _4?: Maybe<StringQueryOperatorInput>,
  _5?: Maybe<StringQueryOperatorInput>,
  _6?: Maybe<StringQueryOperatorInput>,
  _8?: Maybe<StringQueryOperatorInput>,
  _10?: Maybe<StringQueryOperatorInput>,
  _12?: Maybe<StringQueryOperatorInput>,
  _16?: Maybe<StringQueryOperatorInput>,
  _20?: Maybe<StringQueryOperatorInput>,
  _24?: Maybe<StringQueryOperatorInput>,
  _32?: Maybe<StringQueryOperatorInput>,
  _40?: Maybe<StringQueryOperatorInput>,
  _48?: Maybe<StringQueryOperatorInput>,
  _56?: Maybe<StringQueryOperatorInput>,
  _64?: Maybe<StringQueryOperatorInput>,
  px?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeStroke = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeStroke',
  current?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeStrokeFilterInput = {
  current?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeStrokeWidth = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeStrokeWidth',
  _0?: Maybe<Scalars['String']>,
  _1?: Maybe<Scalars['String']>,
  _2?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeStrokeWidthFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  _1?: Maybe<StringQueryOperatorInput>,
  _2?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeTransformOrigin = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeTransformOrigin',
  center?: Maybe<Scalars['String']>,
  top?: Maybe<Scalars['String']>,
  top_right?: Maybe<Scalars['String']>,
  right?: Maybe<Scalars['String']>,
  bottom_right?: Maybe<Scalars['String']>,
  bottom?: Maybe<Scalars['String']>,
  bottom_left?: Maybe<Scalars['String']>,
  left?: Maybe<Scalars['String']>,
  top_left?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeTransformOriginFilterInput = {
  center?: Maybe<StringQueryOperatorInput>,
  top?: Maybe<StringQueryOperatorInput>,
  top_right?: Maybe<StringQueryOperatorInput>,
  right?: Maybe<StringQueryOperatorInput>,
  bottom_right?: Maybe<StringQueryOperatorInput>,
  bottom?: Maybe<StringQueryOperatorInput>,
  bottom_left?: Maybe<StringQueryOperatorInput>,
  left?: Maybe<StringQueryOperatorInput>,
  top_left?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeTransitionDuration = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeTransitionDuration',
  _75?: Maybe<Scalars['String']>,
  _100?: Maybe<Scalars['String']>,
  _150?: Maybe<Scalars['String']>,
  _200?: Maybe<Scalars['String']>,
  _300?: Maybe<Scalars['String']>,
  _500?: Maybe<Scalars['String']>,
  _700?: Maybe<Scalars['String']>,
  _1000?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeTransitionDurationFilterInput = {
  _75?: Maybe<StringQueryOperatorInput>,
  _100?: Maybe<StringQueryOperatorInput>,
  _150?: Maybe<StringQueryOperatorInput>,
  _200?: Maybe<StringQueryOperatorInput>,
  _300?: Maybe<StringQueryOperatorInput>,
  _500?: Maybe<StringQueryOperatorInput>,
  _700?: Maybe<StringQueryOperatorInput>,
  _1000?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeTransitionProperty = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeTransitionProperty',
  none?: Maybe<Scalars['String']>,
  all?: Maybe<Scalars['String']>,
  default?: Maybe<Scalars['String']>,
  colors?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['String']>,
  shadow?: Maybe<Scalars['String']>,
  transform?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeTransitionPropertyFilterInput = {
  none?: Maybe<StringQueryOperatorInput>,
  all?: Maybe<StringQueryOperatorInput>,
  default?: Maybe<StringQueryOperatorInput>,
  colors?: Maybe<StringQueryOperatorInput>,
  opacity?: Maybe<StringQueryOperatorInput>,
  shadow?: Maybe<StringQueryOperatorInput>,
  transform?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeTransitionTimingFunction = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeTransitionTimingFunction',
  linear?: Maybe<Scalars['String']>,
  in?: Maybe<Scalars['String']>,
  out?: Maybe<Scalars['String']>,
  in_out?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeTransitionTimingFunctionFilterInput = {
  linear?: Maybe<StringQueryOperatorInput>,
  in?: Maybe<StringQueryOperatorInput>,
  out?: Maybe<StringQueryOperatorInput>,
  in_out?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeZIndex = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsThemeZIndex',
  _0?: Maybe<Scalars['String']>,
  _10?: Maybe<Scalars['String']>,
  _20?: Maybe<Scalars['String']>,
  _30?: Maybe<Scalars['String']>,
  _40?: Maybe<Scalars['String']>,
  _50?: Maybe<Scalars['String']>,
  auto?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPostCssPluginsThemeZIndexFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>,
  _10?: Maybe<StringQueryOperatorInput>,
  _20?: Maybe<StringQueryOperatorInput>,
  _30?: Maybe<StringQueryOperatorInput>,
  _40?: Maybe<StringQueryOperatorInput>,
  _50?: Maybe<StringQueryOperatorInput>,
  auto?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPostCssPluginsVariants = {
   __typename?: 'SitePluginPluginOptionsPostCssPluginsVariants',
  accessibility?: Maybe<Array<Maybe<Scalars['String']>>>,
  alignContent?: Maybe<Array<Maybe<Scalars['String']>>>,
  alignItems?: Maybe<Array<Maybe<Scalars['String']>>>,
  alignSelf?: Maybe<Array<Maybe<Scalars['String']>>>,
  appearance?: Maybe<Array<Maybe<Scalars['String']>>>,
  backgroundAttachment?: Maybe<Array<Maybe<Scalars['String']>>>,
  backgroundColor?: Maybe<Array<Maybe<Scalars['String']>>>,
  backgroundPosition?: Maybe<Array<Maybe<Scalars['String']>>>,
  backgroundRepeat?: Maybe<Array<Maybe<Scalars['String']>>>,
  backgroundSize?: Maybe<Array<Maybe<Scalars['String']>>>,
  borderCollapse?: Maybe<Array<Maybe<Scalars['String']>>>,
  borderColor?: Maybe<Array<Maybe<Scalars['String']>>>,
  borderRadius?: Maybe<Array<Maybe<Scalars['String']>>>,
  borderStyle?: Maybe<Array<Maybe<Scalars['String']>>>,
  borderWidth?: Maybe<Array<Maybe<Scalars['String']>>>,
  boxShadow?: Maybe<Array<Maybe<Scalars['String']>>>,
  boxSizing?: Maybe<Array<Maybe<Scalars['String']>>>,
  cursor?: Maybe<Array<Maybe<Scalars['String']>>>,
  display?: Maybe<Array<Maybe<Scalars['String']>>>,
  fill?: Maybe<Array<Maybe<Scalars['String']>>>,
  flex?: Maybe<Array<Maybe<Scalars['String']>>>,
  flexDirection?: Maybe<Array<Maybe<Scalars['String']>>>,
  flexGrow?: Maybe<Array<Maybe<Scalars['String']>>>,
  flexShrink?: Maybe<Array<Maybe<Scalars['String']>>>,
  flexWrap?: Maybe<Array<Maybe<Scalars['String']>>>,
  float?: Maybe<Array<Maybe<Scalars['String']>>>,
  clear?: Maybe<Array<Maybe<Scalars['String']>>>,
  fontFamily?: Maybe<Array<Maybe<Scalars['String']>>>,
  fontSize?: Maybe<Array<Maybe<Scalars['String']>>>,
  fontSmoothing?: Maybe<Array<Maybe<Scalars['String']>>>,
  fontStyle?: Maybe<Array<Maybe<Scalars['String']>>>,
  fontWeight?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Array<Maybe<Scalars['String']>>>,
  inset?: Maybe<Array<Maybe<Scalars['String']>>>,
  justifyContent?: Maybe<Array<Maybe<Scalars['String']>>>,
  letterSpacing?: Maybe<Array<Maybe<Scalars['String']>>>,
  lineHeight?: Maybe<Array<Maybe<Scalars['String']>>>,
  listStylePosition?: Maybe<Array<Maybe<Scalars['String']>>>,
  listStyleType?: Maybe<Array<Maybe<Scalars['String']>>>,
  margin?: Maybe<Array<Maybe<Scalars['String']>>>,
  maxHeight?: Maybe<Array<Maybe<Scalars['String']>>>,
  maxWidth?: Maybe<Array<Maybe<Scalars['String']>>>,
  minHeight?: Maybe<Array<Maybe<Scalars['String']>>>,
  minWidth?: Maybe<Array<Maybe<Scalars['String']>>>,
  objectFit?: Maybe<Array<Maybe<Scalars['String']>>>,
  objectPosition?: Maybe<Array<Maybe<Scalars['String']>>>,
  opacity?: Maybe<Array<Maybe<Scalars['String']>>>,
  order?: Maybe<Array<Maybe<Scalars['String']>>>,
  outline?: Maybe<Array<Maybe<Scalars['String']>>>,
  overflow?: Maybe<Array<Maybe<Scalars['String']>>>,
  padding?: Maybe<Array<Maybe<Scalars['String']>>>,
  placeholderColor?: Maybe<Array<Maybe<Scalars['String']>>>,
  pointerEvents?: Maybe<Array<Maybe<Scalars['String']>>>,
  position?: Maybe<Array<Maybe<Scalars['String']>>>,
  resize?: Maybe<Array<Maybe<Scalars['String']>>>,
  stroke?: Maybe<Array<Maybe<Scalars['String']>>>,
  strokeWidth?: Maybe<Array<Maybe<Scalars['String']>>>,
  tableLayout?: Maybe<Array<Maybe<Scalars['String']>>>,
  textAlign?: Maybe<Array<Maybe<Scalars['String']>>>,
  textColor?: Maybe<Array<Maybe<Scalars['String']>>>,
  textDecoration?: Maybe<Array<Maybe<Scalars['String']>>>,
  textTransform?: Maybe<Array<Maybe<Scalars['String']>>>,
  userSelect?: Maybe<Array<Maybe<Scalars['String']>>>,
  verticalAlign?: Maybe<Array<Maybe<Scalars['String']>>>,
  visibility?: Maybe<Array<Maybe<Scalars['String']>>>,
  whitespace?: Maybe<Array<Maybe<Scalars['String']>>>,
  width?: Maybe<Array<Maybe<Scalars['String']>>>,
  wordBreak?: Maybe<Array<Maybe<Scalars['String']>>>,
  zIndex?: Maybe<Array<Maybe<Scalars['String']>>>,
  gap?: Maybe<Array<Maybe<Scalars['String']>>>,
  gridAutoFlow?: Maybe<Array<Maybe<Scalars['String']>>>,
  gridTemplateColumns?: Maybe<Array<Maybe<Scalars['String']>>>,
  gridColumn?: Maybe<Array<Maybe<Scalars['String']>>>,
  gridColumnStart?: Maybe<Array<Maybe<Scalars['String']>>>,
  gridColumnEnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  gridTemplateRows?: Maybe<Array<Maybe<Scalars['String']>>>,
  gridRow?: Maybe<Array<Maybe<Scalars['String']>>>,
  gridRowStart?: Maybe<Array<Maybe<Scalars['String']>>>,
  gridRowEnd?: Maybe<Array<Maybe<Scalars['String']>>>,
  transform?: Maybe<Array<Maybe<Scalars['String']>>>,
  transformOrigin?: Maybe<Array<Maybe<Scalars['String']>>>,
  scale?: Maybe<Array<Maybe<Scalars['String']>>>,
  rotate?: Maybe<Array<Maybe<Scalars['String']>>>,
  translate?: Maybe<Array<Maybe<Scalars['String']>>>,
  skew?: Maybe<Array<Maybe<Scalars['String']>>>,
  transitionProperty?: Maybe<Array<Maybe<Scalars['String']>>>,
  transitionTimingFunction?: Maybe<Array<Maybe<Scalars['String']>>>,
  transitionDuration?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginOptionsPostCssPluginsVariantsFilterInput = {
  accessibility?: Maybe<StringQueryOperatorInput>,
  alignContent?: Maybe<StringQueryOperatorInput>,
  alignItems?: Maybe<StringQueryOperatorInput>,
  alignSelf?: Maybe<StringQueryOperatorInput>,
  appearance?: Maybe<StringQueryOperatorInput>,
  backgroundAttachment?: Maybe<StringQueryOperatorInput>,
  backgroundColor?: Maybe<StringQueryOperatorInput>,
  backgroundPosition?: Maybe<StringQueryOperatorInput>,
  backgroundRepeat?: Maybe<StringQueryOperatorInput>,
  backgroundSize?: Maybe<StringQueryOperatorInput>,
  borderCollapse?: Maybe<StringQueryOperatorInput>,
  borderColor?: Maybe<StringQueryOperatorInput>,
  borderRadius?: Maybe<StringQueryOperatorInput>,
  borderStyle?: Maybe<StringQueryOperatorInput>,
  borderWidth?: Maybe<StringQueryOperatorInput>,
  boxShadow?: Maybe<StringQueryOperatorInput>,
  boxSizing?: Maybe<StringQueryOperatorInput>,
  cursor?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  fill?: Maybe<StringQueryOperatorInput>,
  flex?: Maybe<StringQueryOperatorInput>,
  flexDirection?: Maybe<StringQueryOperatorInput>,
  flexGrow?: Maybe<StringQueryOperatorInput>,
  flexShrink?: Maybe<StringQueryOperatorInput>,
  flexWrap?: Maybe<StringQueryOperatorInput>,
  float?: Maybe<StringQueryOperatorInput>,
  clear?: Maybe<StringQueryOperatorInput>,
  fontFamily?: Maybe<StringQueryOperatorInput>,
  fontSize?: Maybe<StringQueryOperatorInput>,
  fontSmoothing?: Maybe<StringQueryOperatorInput>,
  fontStyle?: Maybe<StringQueryOperatorInput>,
  fontWeight?: Maybe<StringQueryOperatorInput>,
  height?: Maybe<StringQueryOperatorInput>,
  inset?: Maybe<StringQueryOperatorInput>,
  justifyContent?: Maybe<StringQueryOperatorInput>,
  letterSpacing?: Maybe<StringQueryOperatorInput>,
  lineHeight?: Maybe<StringQueryOperatorInput>,
  listStylePosition?: Maybe<StringQueryOperatorInput>,
  listStyleType?: Maybe<StringQueryOperatorInput>,
  margin?: Maybe<StringQueryOperatorInput>,
  maxHeight?: Maybe<StringQueryOperatorInput>,
  maxWidth?: Maybe<StringQueryOperatorInput>,
  minHeight?: Maybe<StringQueryOperatorInput>,
  minWidth?: Maybe<StringQueryOperatorInput>,
  objectFit?: Maybe<StringQueryOperatorInput>,
  objectPosition?: Maybe<StringQueryOperatorInput>,
  opacity?: Maybe<StringQueryOperatorInput>,
  order?: Maybe<StringQueryOperatorInput>,
  outline?: Maybe<StringQueryOperatorInput>,
  overflow?: Maybe<StringQueryOperatorInput>,
  padding?: Maybe<StringQueryOperatorInput>,
  placeholderColor?: Maybe<StringQueryOperatorInput>,
  pointerEvents?: Maybe<StringQueryOperatorInput>,
  position?: Maybe<StringQueryOperatorInput>,
  resize?: Maybe<StringQueryOperatorInput>,
  stroke?: Maybe<StringQueryOperatorInput>,
  strokeWidth?: Maybe<StringQueryOperatorInput>,
  tableLayout?: Maybe<StringQueryOperatorInput>,
  textAlign?: Maybe<StringQueryOperatorInput>,
  textColor?: Maybe<StringQueryOperatorInput>,
  textDecoration?: Maybe<StringQueryOperatorInput>,
  textTransform?: Maybe<StringQueryOperatorInput>,
  userSelect?: Maybe<StringQueryOperatorInput>,
  verticalAlign?: Maybe<StringQueryOperatorInput>,
  visibility?: Maybe<StringQueryOperatorInput>,
  whitespace?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<StringQueryOperatorInput>,
  wordBreak?: Maybe<StringQueryOperatorInput>,
  zIndex?: Maybe<StringQueryOperatorInput>,
  gap?: Maybe<StringQueryOperatorInput>,
  gridAutoFlow?: Maybe<StringQueryOperatorInput>,
  gridTemplateColumns?: Maybe<StringQueryOperatorInput>,
  gridColumn?: Maybe<StringQueryOperatorInput>,
  gridColumnStart?: Maybe<StringQueryOperatorInput>,
  gridColumnEnd?: Maybe<StringQueryOperatorInput>,
  gridTemplateRows?: Maybe<StringQueryOperatorInput>,
  gridRow?: Maybe<StringQueryOperatorInput>,
  gridRowStart?: Maybe<StringQueryOperatorInput>,
  gridRowEnd?: Maybe<StringQueryOperatorInput>,
  transform?: Maybe<StringQueryOperatorInput>,
  transformOrigin?: Maybe<StringQueryOperatorInput>,
  scale?: Maybe<StringQueryOperatorInput>,
  rotate?: Maybe<StringQueryOperatorInput>,
  translate?: Maybe<StringQueryOperatorInput>,
  skew?: Maybe<StringQueryOperatorInput>,
  transitionProperty?: Maybe<StringQueryOperatorInput>,
  transitionTimingFunction?: Maybe<StringQueryOperatorInput>,
  transitionDuration?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SkillJson = Node & {
   __typename?: 'SkillJson',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  proficient?: Maybe<Scalars['Boolean']>,
  show?: Maybe<Scalars['Boolean']>,
};

export type SkillJsonConnection = {
   __typename?: 'SkillJsonConnection',
  totalCount: Scalars['Int'],
  edges: Array<SkillJsonEdge>,
  nodes: Array<SkillJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SkillJsonGroupConnection>,
};


export type SkillJsonConnectionDistinctArgs = {
  field: SkillJsonFieldsEnum
};


export type SkillJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SkillJsonFieldsEnum
};

export type SkillJsonEdge = {
   __typename?: 'SkillJsonEdge',
  next?: Maybe<SkillJson>,
  node: SkillJson,
  previous?: Maybe<SkillJson>,
};

export enum SkillJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  proficient = 'proficient',
  show = 'show'
}

export type SkillJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  proficient?: Maybe<BooleanQueryOperatorInput>,
  show?: Maybe<BooleanQueryOperatorInput>,
};

export type SkillJsonFilterListInput = {
  elemMatch?: Maybe<SkillJsonFilterInput>,
};

export type SkillJsonGroupConnection = {
   __typename?: 'SkillJsonGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SkillJsonEdge>,
  nodes: Array<SkillJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SkillJsonSortInput = {
  fields?: Maybe<Array<Maybe<SkillJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type ImageQueryQueryVariables = {};


export type ImageQueryQuery = (
  { __typename?: 'Query' }
  & { placeholderImage: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<(
        { __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluidFragment
      )> }
    )> }
  )> }
);

export type SiteMetadataQueryQueryVariables = {};


export type SiteMetadataQueryQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>
    )> }
  )> }
);

export type AppQueryVariables = {};


export type AppQuery = (
  { __typename?: 'Query' }
  & { profileImg: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fixed: Maybe<(
        { __typename?: 'ImageSharpFixed' }
        & GatsbyImageSharpFixedFragment
      )> }
    )> }
  )>, header: Maybe<(
    { __typename?: 'ResumeJson' }
    & Pick<ResumeJson, 'fullname' | 'position' | 'summary'>
    & { detail: Maybe<(
      { __typename?: 'ResumeJsonDetail' }
      & Pick<ResumeJsonDetail, 'dateOfBirth' | 'place' | 'phone' | 'email'>
    )>, social: Maybe<(
      { __typename?: 'ResumeJsonSocial' }
      & Pick<ResumeJsonSocial, 'github' | 'linkedin'>
    )> }
  )>, experiences: (
    { __typename?: 'ExperienceJsonConnection' }
    & { edges: Array<(
      { __typename?: 'ExperienceJsonEdge' }
      & { node: (
        { __typename?: 'ExperienceJson' }
        & Pick<ExperienceJson, 'company' | 'position' | 'period' | 'achievements'>
      ) }
    )> }
  ), educations: (
    { __typename?: 'EducationJsonConnection' }
    & { edges: Array<(
      { __typename?: 'EducationJsonEdge' }
      & { node: (
        { __typename?: 'EducationJson' }
        & Pick<EducationJson, 'major' | 'university' | 'period'>
        & { mark: Maybe<(
          { __typename?: 'EducationJsonMark' }
          & Pick<EducationJsonMark, 'name' | 'value'>
        )> }
      ) }
    )> }
  ), skills: (
    { __typename?: 'SkillJsonConnection' }
    & { edges: Array<(
      { __typename?: 'SkillJsonEdge' }
      & { node: (
        { __typename?: 'SkillJson' }
        & Pick<SkillJson, 'name' | 'proficient' | 'show'>
      ) }
    )> }
  ), languages: (
    { __typename?: 'LanguageJsonConnection' }
    & { edges: Array<(
      { __typename?: 'LanguageJsonEdge' }
      & { node: (
        { __typename?: 'LanguageJson' }
        & Pick<LanguageJson, 'name' | 'level'>
      ) }
    )> }
  ), projects: (
    { __typename?: 'ProjectJsonConnection' }
    & { edges: Array<(
      { __typename?: 'ProjectJsonEdge' }
      & { node: (
        { __typename?: 'ProjectJson' }
        & Pick<ProjectJson, 'name' | 'link' | 'description'>
      ) }
    )> }
  ) }
);
