class ServiceProtocol {
  final String id;
  final String clientName;
  final String deviceType;
  final String deviceModel;
  final String serialNumber;
  final String problemDescription;
  final String workDescription;
  final List<String> usedParts;
  final DateTime createdAt;
  final DateTime? completedAt;
  final String status; // 'in_progress', 'completed', 'cancelled'
  final double? totalCost;
  final String technicianName;
  final String? technicianSignature;
  final String? clientSignature;
  final List<String> images;

  ServiceProtocol({
    required this.id,
    required this.clientName,
    required this.deviceType,
    required this.deviceModel,
    required this.serialNumber,
    required this.problemDescription,
    required this.workDescription,
    required this.usedParts,
    required this.createdAt,
    this.completedAt,
    this.status = 'in_progress',
    this.totalCost,
    required this.technicianName,
    this.technicianSignature,
    this.clientSignature,
    this.images = const [],
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'clientName': clientName,
      'deviceType': deviceType,
      'deviceModel': deviceModel,
      'serialNumber': serialNumber,
      'problemDescription': problemDescription,
      'workDescription': workDescription,
      'usedParts': usedParts.join('|'),
      'createdAt': createdAt.millisecondsSinceEpoch,
      'completedAt': completedAt?.millisecondsSinceEpoch,
      'status': status,
      'totalCost': totalCost,
      'technicianName': technicianName,
      'technicianSignature': technicianSignature,
      'clientSignature': clientSignature,
      'images': images.join('|'),
    };
  }

  factory ServiceProtocol.fromMap(Map<String, dynamic> map) {
    return ServiceProtocol(
      id: map['id'] ?? '',
      clientName: map['clientName'] ?? '',
      deviceType: map['deviceType'] ?? '',
      deviceModel: map['deviceModel'] ?? '',
      serialNumber: map['serialNumber'] ?? '',
      problemDescription: map['problemDescription'] ?? '',
      workDescription: map['workDescription'] ?? '',
      usedParts: (map['usedParts'] ?? '').toString().split('|').where((e) => e.isNotEmpty).toList(),
      createdAt: DateTime.fromMillisecondsSinceEpoch(map['createdAt'] ?? 0),
      completedAt: map['completedAt'] != null ? DateTime.fromMillisecondsSinceEpoch(map['completedAt']) : null,
      status: map['status'] ?? 'in_progress',
      totalCost: map['totalCost']?.toDouble(),
      technicianName: map['technicianName'] ?? '',
      technicianSignature: map['technicianSignature'],
      clientSignature: map['clientSignature'],
      images: (map['images'] ?? '').toString().split('|').where((e) => e.isNotEmpty).toList(),
    );
  }

  ServiceProtocol copyWith({
    String? id,
    String? clientName,
    String? deviceType,
    String? deviceModel,
    String? serialNumber,
    String? problemDescription,
    String? workDescription,
    List<String>? usedParts,
    DateTime? createdAt,
    DateTime? completedAt,
    String? status,
    double? totalCost,
    String? technicianName,
    String? technicianSignature,
    String? clientSignature,
    List<String>? images,
  }) {
    return ServiceProtocol(
      id: id ?? this.id,
      clientName: clientName ?? this.clientName,
      deviceType: deviceType ?? this.deviceType,
      deviceModel: deviceModel ?? this.deviceModel,
      serialNumber: serialNumber ?? this.serialNumber,
      problemDescription: problemDescription ?? this.problemDescription,
      workDescription: workDescription ?? this.workDescription,
      usedParts: usedParts ?? this.usedParts,
      createdAt: createdAt ?? this.createdAt,
      completedAt: completedAt ?? this.completedAt,
      status: status ?? this.status,
      totalCost: totalCost ?? this.totalCost,
      technicianName: technicianName ?? this.technicianName,
      technicianSignature: technicianSignature ?? this.technicianSignature,
      clientSignature: clientSignature ?? this.clientSignature,
      images: images ?? this.images,
    );
  }

  bool get isCompleted => status == 'completed';
  bool get isInProgress => status == 'in_progress';
  bool get isCancelled => status == 'cancelled';
  
  Duration? get workDuration {
    if (completedAt != null) {
      return completedAt!.difference(createdAt);
    }
    return null;
  }

  @override
  String toString() {
    return 'ServiceProtocol(id: $id, clientName: $clientName, deviceType: $deviceType, status: $status)';
  }
}
