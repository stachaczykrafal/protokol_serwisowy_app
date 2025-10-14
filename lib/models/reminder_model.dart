class ReminderModel {
  final int? id;
  final String title;
  final String description;
  final DateTime reminderDate;
  final int? protocolId;
  final bool isCompleted;
  final DateTime createdAt;

  ReminderModel({
    this.id,
    required this.title,
    required this.description,
    required this.reminderDate,
    this.protocolId,
    this.isCompleted = false,
    DateTime? createdAt,
  }) : createdAt = createdAt ?? DateTime.now();

  // Convert to Map for database storage
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'reminderDate': reminderDate.toIso8601String(),
      'protocolId': protocolId,
      'isCompleted': isCompleted ? 1 : 0,
      'createdAt': createdAt.toIso8601String(),
    };
  }

  // Create from Map (from database)
  factory ReminderModel.fromMap(Map<String, dynamic> map) {
    return ReminderModel(
      id: map['id'],
      title: map['title'] ?? '',
      description: map['description'] ?? '',
      reminderDate: DateTime.parse(map['reminderDate']),
      protocolId: map['protocolId'],
      isCompleted: map['isCompleted'] == 1,
      createdAt: DateTime.parse(map['createdAt']),
    );
  }

  ReminderModel copyWith({
    int? id,
    String? title,
    String? description,
    DateTime? reminderDate,
    int? protocolId,
    bool? isCompleted,
    DateTime? createdAt,
  }) {
    return ReminderModel(
      id: id ?? this.id,
      title: title ?? this.title,
      description: description ?? this.description,
      reminderDate: reminderDate ?? this.reminderDate,
      protocolId: protocolId ?? this.protocolId,
      isCompleted: isCompleted ?? this.isCompleted,
      createdAt: createdAt ?? this.createdAt,
    );
  }

  bool get isOverdue => DateTime.now().isAfter(reminderDate) && !isCompleted;
  bool get isUpcoming => reminderDate.isAfter(DateTime.now()) && !isCompleted;
}
