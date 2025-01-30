from flask import Blueprint, request, jsonify
from .models import Medicine, FAQ, Review, SideEffect
from .database import db

# Create a Blueprint
routes = Blueprint('routes', __name__)


# --------------------
# Route: Create New Medicine
# --------------------
@routes.route('/medicine', methods=['POST'])
def create_medicine():
    data = request.get_json()
    
    # Validate required fields
    required_fields = ['name', 'generic_name', 'price']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing required field: {field}'}), 400

    # Create new medicine
    new_medicine = Medicine(
        name=data['name'],
        generic_name=data['generic_name'],
        price=data['price'],
        # Add other optional fields as needed
        formulation=data.get('formulation'),
        dosage=data.get('dosage'),
        manufacturer=data.get('manufacturer'),
        description=data.get('description')
    )

    try:
        db.session.add(new_medicine)
        db.session.commit()
        return jsonify(new_medicine.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
# --------------------
# Route: Get Medicine Details
# --------------------
@routes.route('/medicine/<int:medicine_id>', methods=['GET'])
def get_medicine_details(medicine_id):
    medicine = Medicine.query.get(medicine_id)
    if not medicine:
        return jsonify({'error': 'Medicine not found'}), 404
    return jsonify(medicine.to_dict()), 200


# --------------------
# Route: Get All Medicines
# --------------------
@routes.route('/compare_medicines', methods=['GET'])
def compare_medicines():
    # Fetch all medicines from the database
    medicines = Medicine.query.all()
    
    if not medicines:
        return jsonify({'error': 'No medicines available'}), 404

    response = [medicine.to_dict() for medicine in medicines]
    return jsonify(response), 200



# --------------------
# Route: Get FAQs for a Medicine
# --------------------
@routes.route('/medicine/<int:medicine_id>/faqs', methods=['GET'])
def get_medicine_faqs(medicine_id):
    faqs = FAQ.query.filter_by(medicine_id=medicine_id).all()
    if not faqs:
        return jsonify({'message': 'No FAQs found for this medicine'}), 404

    response = [faq.to_dict() for faq in faqs]
    return jsonify(response), 200


# --------------------
# Route: Get Reviews for a Medicine
# --------------------
@routes.route('/medicine/<int:medicine_id>/reviews', methods=['GET'])
def get_medicine_reviews(medicine_id):
    reviews = Review.query.filter_by(medicine_id=medicine_id).all()
    if not reviews:
        return jsonify({'message': 'No reviews found for this medicine'}), 404

    response = [review.to_dict() for review in reviews]
    return jsonify(response), 200


# --------------------
# Route: Get Side Effects for a Medicine
# --------------------
@routes.route('/medicine/<int:medicine_id>/side_effects', methods=['GET'])
def get_side_effects(medicine_id):
    side_effects = SideEffect.query.filter_by(medicine_id=medicine_id).all()
    if not side_effects:
        return jsonify({'message': 'No side effects found for this medicine'}), 404

    response = [side_effect.to_dict() for side_effect in side_effects]
    return jsonify(response), 200
