// tslint:disable
// graphql typescript definitions

declare namespace RT90 {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation | ISubscription;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    message: string;            // Required for all errors
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  
  interface IQuery {
    adminGetUsers: Array<IUser>;
    adminGetUserByEmail: IUser | null;
    adminGetUserByName: IUser | null;
    getCustomWidgets: Array<ICustomWidget>;
    getLeaderBoard: ILeaderBoard | null;
    activeTournamentSeason: ITournamentSeason | null;
    getActiveRound: ITournamentRound | null;
    getRound: ITournamentRound | null;
    getMatch: ISeasonMatches | null;
    getLanguage: string | null;
    getNamespaces: Array<string>;
    getLanguagePretty: Array<IComplexTranslation> | null;
    me: IUser | null;
    getUsers: Array<IUser> | null;
    getUser: IUser | null;
    getGroup: IGroup | null;
    getGroups: Array<IGroup>;
    searchGroups: Array<IGroup> | null;
    chatMessages: Array<IChatMessagesOnDay> | null;
    getUnreadMessages: Array<IChatMessageStatus>;
    getWidgetFeed: IWidgetFeed;
}
interface IAdminGetUserByEmailOnQueryArguments {
email: string;
}
interface IAdminGetUserByNameOnQueryArguments {
name: string;
}
interface IGetLeaderBoardOnQueryArguments {
input: ILeaderBoardInput;
}
interface IGetRoundOnQueryArguments {
roundName?: string | null;
roundNumber?: number | null;
roundGroup?: number | null;
}
interface IGetMatchOnQueryArguments {
matchId?: string | null;
}
interface IGetLanguageOnQueryArguments {
lang: ILanguageEnum;
}
interface IGetLanguagePrettyOnQueryArguments {
lang: ILanguageEnum;
}
interface IGetUserOnQueryArguments {
id: string;
}
interface IGetGroupOnQueryArguments {
id: string;
}
interface ISearchGroupsOnQueryArguments {
searchPattern?: string | null;
skip?: number | null;
/**
    @default 10
  */
take?: number | null;
}
interface IChatMessagesOnQueryArguments {
groupId: string;
skip?: number | null;
/**
    @default 10
  */
take?: number | null;
}
interface IGetUnreadMessagesOnQueryArguments {
groupIds: Array<string>;
}

  
  interface IUser {
    id: string | null;
    fullName: string | null;
    emailAddress: string | null;
    country: ICountryEnum | null;
    dateOfBirth: string | null;
    zipCode: string | null;
    countyByZip: string | null;
    profileImageLink: string | null;
    chosenLanguage: ILanguageEnum | null;
    notifications: INotifications | null;
    hasPassword: boolean | null;
    isFollowed: boolean | null;
    followerCount: number | null;
    favoriteTeam: ISoccerTeam | null;
    ranks: Array<IRankForRound> | null;
    globalRank: IRank | null;
    stats: IStats | null;
    streak: number | null;
}
interface IStreakOnUserArguments {
name: IStreakEnum;
}

  
  type ICountryEnum = 'GERMANY' | 'OTHER';

  
  type ILanguageEnum = 'DE' | 'EN';

  
  interface INotifications {
    enableAllNotifications: boolean | null;
    matchdayReminders: boolean | null;
    enableRemindersDayBefore: boolean | null;
    enableRemindersHourBefore: boolean | null;
    enableRemindersMinuteBefore: boolean | null;
    quickTips: boolean | null;
    chatMessages: boolean | null;
    groupChatsDisabled: Array<IGroup>;
}

  
  interface IGroup {
    id: string | null;
    name: string | null;
    isPrivate: boolean | null;
    accessCode: string | null;
    avatarImageLink: string | null;
    admins: Array<IUser> | null;
    members: Array<IUser> | null;
    bannedUsers: Array<IUser> | null;
}

  
  interface ISoccerTeam {
    id: string | null;
    name: string | null;
    country: string | null;
    countryCode: string | null;
    abbreviation: string | null;
    myPosition: number | null;
}

  
  interface IRankForRound {
    rank: IRank | null;
    round: ITournamentRound | null;
}

  
  interface IRank {
    user: IUser | null;
    position: number;
    positionChange: number | null;
    points: number;
    betType: IBetTypeEnum | null;
    maxPoints: number | null;
}

  
  type IBetTypeEnum = 'homeWin' | 'homeWinTurbo' | 'draw' | 'awayWin' | 'awayWinTurbo';

  
  interface ITournamentRound {
    name: string | null;
    number: string | null;
    group: string | null;
    matches: Array<ISeasonMatches>;
}

  
  interface ISeasonMatches {
    id: string | null;
    scheduled: string | null;
    bettingOpen: boolean | null;
    homeTeam: ISoccerTeam | null;
    awayTeam: ISoccerTeam | null;
    tournamentRound: IMatchRound | null;
    liveScore: IScore | null;
    halfTimeScore: IScore | null;
    normalTimeScore: IScore | null;
    finalScore: IScore | null;
    facts: Array<IFact> | null;
    winner: ISoccerTeam | null;
    matchTime: string | null;
    /**
    status in docs (match_status `in Docs (https://developer.sportradar.com/files/2018_Sportradar_Soccer_Statistics_Feeds_with_Extended_Coverage.pdf)
  */
    status: IMatchSportradarStatusEnum | null;
    matchStatus: IMatchRealStatusEnum | null;
    /**
    Belongs to the tipping module
  */
    myBet: IBet | null;
    calculatedOdds: ICalculatedOdds | null;
    myRank: IRank | null;
}
interface IFactsOnSeasonMatchesArguments {
lang: ILanguageEnum;
}

  
  interface IMatchRound {
    type: string | null;
    name: string | null;
    number: string | null;
    group: string | null;
    matches: Array<ISeasonMatches> | null;
}

  
  interface IScore {
    homeScore: number | null;
    awayScore: number | null;
}

  
  interface IFact {
    /**
    text OR position
  */
    type: string;
    text: string | null;
    homePosition: number | null;
    awayPosition: number | null;
}

  /**
    status in docs (match_status `in Docs (https://developer.sportradar.com/files/2018_Sportradar_Soccer_Statistics_Feeds_with_Extended_Coverage.pdf)
  */
  type IMatchSportradarStatusEnum = 'not_started' | 'live' | 'postponed' | 'delayed' | 'start_delayed' | 'cancelled' | 'ended' | 'closed';

  /**
    status in docs (status `in Docs (https://developer.sportradar.com/files/2018_Sportradar_Soccer_Statistics_Feeds_with_Extended_Coverage.pdf)
  */
  type IMatchRealStatusEnum = 'not_started' | 'live' | 'first_half' | 'second_half' | 'overtime' | 'first_extra' | 'second_extra' | 'awaiting_penalties' | 'penalties' | 'pause' | 'awaiting_extra_time' | 'interrupted' | 'abandoned' | 'postponed' | 'delayed' | 'cancelled' | 'ended' | 'closed' | 'halftime' | 'full_time' | 'extra_time' | 'aet' | 'ap';

  
  interface IBet {
    type: IBetTypeEnum;
    value: number;
    isJoker: boolean;
}

  
  interface ICalculatedOdds {
    homeWinTurbo: number;
    homeWin: number;
    draw: number;
    awayWin: number;
    awayWinTurbo: number;
    matchId: string | null;
}

  
  interface IStats {
    totalWin: number | null;
    totalLose: number | null;
    hitRate: number | null;
    stallion: number | null;
}

  
  type IStreakEnum = 'win_streak' | 'biggest_win_streak' | 'ghost_ride' | 'matchday_victory';

  
  interface ICustomWidget {
    id: string;
    updatedAtDate: string | null;
    widgetTitle: string;
    title: string;
    description: string;
    longText: string | null;
    buttonTitle: string | null;
    buttonType: IButtonTypeEnum | null;
    buttonDestination: string | null;
    activeFrom: string | null;
    activeUntil: string | null;
    widgetImage: string | null;
    widgetIcon: string | null;
    widgetBackground: string | null;
}

  
  type IButtonTypeEnum = 'ExternalLink' | 'InternalLink' | 'LongTextTrigger';

  
  interface ILeaderBoardInput {
    groupId?: string | null;
    followed?: boolean | null;
    liveOnly?: boolean | null;
    start: number;
    stop: number;
    matchId?: string | null;
    roundName?: string | null;
    roundGroup?: string | null;
    roundNumber?: number | null;
}

  
  interface ILeaderBoard {
    ranks: Array<IRank>;
    myRank: IRank;
}

  
  interface ITournamentSeason {
    id: string | null;
    name: string | null;
    startDate: string | null;
    endDate: string | null;
    year: string | null;
    tournament: ITournament | null;
    rounds: Array<ITournamentRoundWithoutMatches> | null;
}

  
  interface ITournament {
    name: string | null;
}

  
  interface ITournamentRoundWithoutMatches {
    name: string | null;
    number: string | null;
    group: string | null;
}

  
  interface IComplexTranslation {
    lang: ILanguageEnum;
    namespace: string;
    key: string;
    value: string;
}

  
  interface IChatMessagesOnDay {
    createdAt: string;
    chatMessages: Array<IChatMessage>;
}

  
  interface IChatMessage {
    id: string | null;
    createdAt: string | null;
    user: IUser | null;
    group: IGroup | null;
    message: string | null;
}

  
  interface IChatMessageStatus {
    user: IUser;
    group: IGroup;
    unRead: number;
}

  
  interface IWidgetFeed {
    lastUpdatedAt: string;
    widgets: Array<Widget>;
}

  
  type Widget = IBadges | IChat | IComparsionBet | ICountdown | ICustom | IFavoriteTeam | IFeaturedUser | IFeedback | ILiveMatch | IPeopleToFollow | IProfile | IRankings | IRankingsGhostRide | IRankingsMatchdayVictory | IRankingsStreak | ISportwetten | ISportwettenFeelLucky | IStudOMeter | ITippingStatsRank | ITippingStats | ITrend;

  
  interface IWidget {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
}

  
  type IWidgetTypeEnum = 'badges' | 'chat' | 'comparsionBet' | 'countdown' | 'custom' | 'favoriteTeam' | 'featuredUser' | 'feedback' | 'liveMatch' | 'peopleToFollow' | 'profile' | 'rankings' | 'rankingsStreak' | 'rankingsGhostRide' | 'rankingsMatchdayVictory' | 'sportwetten' | 'sportwettenFeelLucky' | 'studometer' | 'tippingStats' | 'tippingStatsRank' | 'trend';

  
  interface IMutation {
    adminLogin: IToken | null;
    editTranslation: string;
    createWidget: ICustomWidget;
    editWidget: ICustomWidget;
    facebook: IToken | null;
    login: IToken | null;
    refreshToken: IToken | null;
    placeBet: ISeasonMatches | null;
    removeBet: IBet | null;
    quickBet: ITournamentRound | null;
    syncTournament: ITournament | null;
    syncTrends: number | null;
    changeActiveSeason: ITournamentSeason | null;
    setFavoriteTeam: IUser | null;
    startMatch: ISeasonMatches | null;
    stopMatch: ISeasonMatches | null;
    addGoal: ISeasonMatches | null;
    resetMatch: ISeasonMatches | null;
    createTranslation: Array<IComplexTranslation>;
    createUser: IUser | null;
    editUser: IUser | null;
    deleteUser: IUser | null;
    setNotifications: INotifications | null;
    createForgotPasswordToken: string | null;
    checkForgotPasswordToken: string | null;
    resetPassword: IUser | null;
    changePassword: IUser | null;
    followUser: IUser | null;
    unFollowUser: IUser | null;
    submitFeedback: IFeedbackMessage | null;
    createGroup: IGroup | null;
    editGroup: IGroup | null;
    removeGroup: IGroup | null;
    markChatAsRead: IChatMessageStatus | null;
    addUserToGroup: IGroup | null;
    joinGroup: IGroup | null;
    leaveGroup: IGroup | null;
    allowJoin: IInvitationRequest | null;
    requestJoin: IInvitationRequest | null;
    sendChatMessage: IChatMessage | null;
    muteGroup: IGroup | null;
    unMuteGroup: IGroup | null;
    grantAdminInGroup: IGroup | null;
    revokeAdminInGroup: IGroup | null;
    banUserFromGroup: IGroup | null;
    removeBanFromUserInGroup: IGroup | null;
}
interface IAdminLoginOnMutationArguments {
emailAddress: string;
password: string;
}
interface IEditTranslationOnMutationArguments {
input: ITranslationEditInput;
}
interface ICreateWidgetOnMutationArguments {
input: ICustomWidgetInput;
}
interface IEditWidgetOnMutationArguments {
id: string;
input: ICustomWidgetInput;
}
interface IFacebookOnMutationArguments {
accessToken: string;
}
interface ILoginOnMutationArguments {
emailAddress: string;
password: string;
}
interface IRefreshTokenOnMutationArguments {
refreshToken: string;
}
interface IPlaceBetOnMutationArguments {
matchId: string;
myBet: IBetInput;
}
interface IRemoveBetOnMutationArguments {
matchId: string;
}
interface IQuickBetOnMutationArguments {
roundName?: string | null;
roundNumber?: number | null;
}
interface ISyncTournamentOnMutationArguments {
tounramentId: string;
type: ITournamentTypeEnum;
}
interface IChangeActiveSeasonOnMutationArguments {
id: string;
}
interface ISetFavoriteTeamOnMutationArguments {
teamId: string;
}
interface IStartMatchOnMutationArguments {
matchId: string;
}
interface IStopMatchOnMutationArguments {
matchId: string;
}
interface IAddGoalOnMutationArguments {
matchId: string;
team: ITeamTypeEnum;
}
interface IResetMatchOnMutationArguments {
matchId: string;
}
interface ICreateTranslationOnMutationArguments {
namespace: string;
key: string;
langs: Array<ICreateTranslationInput>;
}
interface ICreateUserOnMutationArguments {
user: IUserCreationInput;
}
interface IEditUserOnMutationArguments {
userEditData: IUserEditInput;
}
interface IDeleteUserOnMutationArguments {
userId: string;
}
interface ISetNotificationsOnMutationArguments {
notificationsData: ISetNotificationsInput;
}
interface ICreateForgotPasswordTokenOnMutationArguments {
emailAddress: string;
}
interface ICheckForgotPasswordTokenOnMutationArguments {
token: string;
}
interface IResetPasswordOnMutationArguments {
token: string;
newPassword: string;
}
interface IChangePasswordOnMutationArguments {
oldPassword?: string | null;
newPassword: string;
}
interface IFollowUserOnMutationArguments {
followedUserId: string;
}
interface IUnFollowUserOnMutationArguments {
followedUserId: string;
}
interface ISubmitFeedbackOnMutationArguments {
message: string;
}
interface ICreateGroupOnMutationArguments {
group: IGroupCreationInput;
}
interface IEditGroupOnMutationArguments {
group: IGroupEditInput;
}
interface IRemoveGroupOnMutationArguments {
group: IGroupRemoveInput;
}
interface IMarkChatAsReadOnMutationArguments {
groupId: string;
}
interface IAddUserToGroupOnMutationArguments {
input: IGroupAdminActionInput;
}
interface IJoinGroupOnMutationArguments {
groupId: string;
accessCode?: string | null;
}
interface ILeaveGroupOnMutationArguments {
groupId: string;
}
interface IAllowJoinOnMutationArguments {
invitationId: string;
}
interface IRequestJoinOnMutationArguments {
groupId: string;
}
interface ISendChatMessageOnMutationArguments {
groupId: string;
message: string;
}
interface IMuteGroupOnMutationArguments {
groupId: string;
}
interface IUnMuteGroupOnMutationArguments {
groupId: string;
}
interface IGrantAdminInGroupOnMutationArguments {
input: IGroupAdminActionInput;
}
interface IRevokeAdminInGroupOnMutationArguments {
input: IGroupAdminActionInput;
}
interface IBanUserFromGroupOnMutationArguments {
input: IGroupAdminActionInput;
}
interface IRemoveBanFromUserInGroupOnMutationArguments {
input: IGroupAdminActionInput;
}

  
  interface IToken {
    accessToken: string | null;
    expiresIn: string | null;
    refreshToken: string | null;
    user: IUser | null;
}

  
  interface ITranslationEditInput {
    id: string;
    newValue: string;
}

  
  interface ICustomWidgetInput {
    widgetTitle: string;
    title: string;
    description: string;
    longText?: string | null;
    buttonType?: IButtonTypeEnum | null;
    buttonTitle?: string | null;
    buttonDestination?: string | null;
    activeFrom?: string | null;
    activeUntil?: string | null;
    widgetImage?: string | null;
    widgetIcon?: string | null;
    widgetBackground?: string | null;
}

  
  interface IBetInput {
    type: IBetTypeEnum;
    value: number;
    isJoker: boolean;
}

  /**
    For the sportradar API
  */
  type ITournamentTypeEnum = 'EU' | 'INTERNATIONAL' | 'OTHER';

  
  type ITeamTypeEnum = 'HOME' | 'AWAY';

  
  interface ICreateTranslationInput {
    lang: ILanguageEnum;
    value: string;
}

  
  interface IUserCreationInput {
    password: string;
    fullName: string;
    emailAddress: string;
}

  
  interface IUserEditInput {
    id: string;
    profileImageBlob?: string | null;
    avatarId?: number | null;
    fullName?: string | null;
    emailAddress?: string | null;
    chosenLanguage?: ILanguageEnum | null;
    zipCode?: string | null;
    country?: ICountryEnum | null;
}

  
  interface ISetNotificationsInput {
    userId: string;
    enableAllNotifications?: boolean | null;
    matchdayReminders?: boolean | null;
    enableRemindersDayBefore?: boolean | null;
    enableRemindersHourBefore?: boolean | null;
    enableRemindersMinuteBefore?: boolean | null;
    quickTips?: boolean | null;
    chatMessages?: boolean | null;
}

  
  interface IFeedbackMessage {
    message: string;
}

  
  interface IGroupCreationInput {
    name: string;
    accessCode: string;
}

  
  interface IGroupEditInput {
    id: string;
    name?: string | null;
    accessCode?: string | null;
    avatarImageBlob?: string | null;
    avatarId?: number | null;
}

  
  interface IGroupRemoveInput {
    id: string;
}

  
  interface IGroupAdminActionInput {
    groupId: string;
    userId: string;
}

  
  interface IInvitationRequest {
    id: string | null;
    approved: boolean | null;
    user: IUser | null;
    group: IGroup | null;
}

  
  interface ISubscription {
    leaderBoardSubscription: IRankUpdate | null;
    onOddsChange: ICalculatedOdds;
    onMatchStatusChange: ISeasonMatches;
    onRoundStatusChange: ITournamentRound;
    chatMessage: IChatMessage;
    unreadMessages: IChatMessageStatus;
    widgetFeed: IWidgetFeed;
}
interface ILeaderBoardSubscriptionOnSubscriptionArguments {
input: ILeaderBoardInput;
}
interface IOnOddsChangeOnSubscriptionArguments {
matchIds: Array<string>;
}
interface IOnMatchStatusChangeOnSubscriptionArguments {
matchIds: Array<string>;
}
interface IChatMessageOnSubscriptionArguments {
groupId: string;
}
interface IUnreadMessagesOnSubscriptionArguments {
groupIds: Array<string>;
}

  
  interface IRankUpdate {
    userId: string;
    position: number;
    positionChange: number;
    points: number;
}

  
  interface IWidgetFeedInput {
    lastId: string;
    take: number;
    pollingTime: number;
}

  
  type IRankingTypeEnum = 'streak' | 'ghostRide' | 'matchdayVictory' | 'mostFollower';

  
  interface IStat {
    globalPosition: number | null;
    globalPositionChange: number | null;
    totalPoints: number | null;
}

  
  interface IBadges {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    title: string;
    description: string;
    group: IGroup | null;
    date: string | null;
    reason: string;
    imageUrl: string | null;
}

  
  interface IGroupWithUnread {
    group: IGroup;
    unRead: number;
}

  
  interface IChat {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    groups: Array<IGroupWithUnread>;
}

  
  interface IComparsionBetNumber {
    home: number;
    draw: number;
    away: number;
    group: string | null;
}

  
  interface IComparsionBet {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    match: ISeasonMatches;
    numbers: Array<IComparsionBetNumber>;
}

  
  interface ICountdown {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    nextMatchScheduled: string;
}

  
  interface ICustom {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    widgetTitle: string;
    title: string;
    description: string;
    buttonTitle: string;
    buttonDestination: string;
    widgetImage: string | null;
    widgetIcon: string | null;
    widgetBackground: string | null;
}

  
  interface IFavoriteTeam {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    myFavoriteTeam: ISoccerTeam | null;
    myPosition: number | null;
    teams: Array<ISoccerTeam>;
}

  
  interface IFeaturedUser {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    user: IUser;
}

  
  interface IFeedback {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
}

  
  interface ILiveMatch {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    matches: Array<ISeasonMatches>;
}

  
  interface IPeopleToFollow {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    peopleToFollow: Array<IUser>;
}

  
  interface IProfile {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    user: IUser;
}

  
  interface IRankingsUsers {
    user: IUser;
    number: number;
}

  
  interface IRankings {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    rankingType: IRankingTypeEnum;
    groupFilterIds: Array<string>;
    users: Array<IRankingsUsers>;
}

  
  interface IRankingsGhostRide {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    rankingType: IRankingTypeEnum;
    groupFilterIds: Array<string>;
    users: Array<IRankingsUsers>;
}

  
  interface IRankingsMatchdayVictory {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    rankingType: IRankingTypeEnum;
    groupFilterIds: Array<string>;
    users: Array<IRankingsUsers>;
}

  
  interface IRankingsStreak {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    rankingType: IRankingTypeEnum;
    groupFilterIds: Array<string>;
    users: Array<IRankingsUsers>;
}

  
  interface ISportwetten {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    betAmount: number | null;
}

  
  interface ISportwettenFeelLucky {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    betAmount: number | null;
}

  
  interface IStudOMeter {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    stallionPercentage: number | null;
}

  
  interface ITippingStatsRank {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    user: IUser;
    isLive: boolean;
}

  
  interface ITippingStats {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    user: IUser;
    isLive: boolean;
}

  
  interface ITrend {
    id: string;
    type: IWidgetTypeEnum;
    orderId: number;
    roundNumber: number;
    factText: string;
}
}

// tslint:enable
